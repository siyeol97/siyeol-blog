import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import colors from '@/utils/colors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      if (req.body.title === '' || req.body.content === '') {
        res.status(500).json('유효하지 않은 형식 입니다.');
        return;
      }
      req.body = JSON.parse(req.body);

      const postId = new ObjectId(req.body.post_id);
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      const session = await getServerSession(req, res, authOptions);
      const post = await db.collection('blog_post').findOne({ _id: postId });

      if (!post) {
        throw new Error('post not found');
      }

      // 수정 전 태그
      const originalTags: string[] = post.tags.map(
        (item: { tag: string; color: string }) => item.tag
      );

      // 수정 후 태그 중 새로 추가된 태그
      const newTags: string[] = req.body.tags.filter((tag: string) => {
        return !originalTags.includes(tag);
      });

      // 수정 전 태그 중 삭제된 태그
      const deletedTags: string[] = originalTags.filter((tag: string) => {
        return !req.body.tags.includes(tag);
      });

      // 새로 추가된 태그도 아니고 삭제된 태그도 아닌 태그
      const remainedTags: string[] = req.body.tags.filter((tag: string) => {
        return !newTags.includes(tag);
      });

      // tag field에서 새로 추가된 태그의 posts 필드에 postId 추가
      const newTagField = await Promise.all(
        newTags.map(async (tag) => {
          const existingTag = await db.collection('tag').findOne({ tag }); // 태그가 이미 존재하는지 확인
          if (!existingTag) {
            // 태그가 존재하지 않으면 새로 추가
            const color = colors[Math.floor(Math.random() * colors.length)];
            await db
              .collection('tag')
              .insertOne({ tag, color, posts: [postId] });
            return {
              tag,
              color,
            };
          } else {
            // 태그가 존재하면 posts 필드에 postId 추가
            await db
              .collection('tag')
              .updateOne({ tag }, { $push: { posts: postId } });

            return {
              tag,
              color: existingTag.color,
            };
          }
        })
      );

      const remainedTagField = await Promise.all(
        remainedTags.map(async (tag) => {
          const existingTag = await db.collection('tag').findOne({ tag });
          if (existingTag) {
            return {
              tag,
              color: existingTag.color,
            };
          }
        })
      );

      // tag field에서 삭제된 태그의 posts 필드에서 postId 삭제
      await Promise.all(
        deletedTags.map(async (tag) => {
          await db
            .collection('tag')
            .updateOne({ tag }, { $pull: { posts: postId } });
        })
      );

      const changedPost = {
        title: req.body.title,
        content: req.body.content,
        tags: [...remainedTagField, ...newTagField],
      };

      if (post.author === session?.user?.email) {
        await db
          .collection('blog_post')
          .updateOne({ _id: postId }, { $set: changedPost });
        res.status(200).json({ post_id: req.body.post_id });
        return;
      }
      throw new Error('잘못된 접근입니다.');
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
