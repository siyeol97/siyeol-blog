import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import colors from '@/utils/colors';
import { TagField, TagType } from '@/app/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      throw new Error();
    }

    if (req.body.title === '' || req.body.content === '') {
      throw new Error();
    }

    req.body = JSON.parse(req.body);
    const session = await getServerSession(req, res, authOptions);
    const client = await connectDB;
    const db = client.db('siyeol_blog');

    const tagField: TagField = {
      tag: '',
      color: '',
      posts: [],
    };

    const postTag: TagType[] = await Promise.all(
      req.body.tags.map(async (tag: string) => {
        const existingTag = await db.collection('tag').findOne({ tag });
        if (existingTag) {
          return {
            tag,
            color: existingTag.color,
          };
        } else {
          // 새로운 태그 추가
          const color = colors[Math.floor(Math.random() * colors.length)];
          const newTag = { tag, color };
          await db.collection('tag').insertOne({ ...tagField, ...newTag });
          return newTag;
        }
      })
    );

    const data = {
      title: req.body.title,
      content: req.body.content,
      tags: postTag,
      name: session?.user?.name,
      author: session?.user?.email,
      author_image: session?.user?.image,
      created_at: new Date(),
      like_count: 0,
    };
    const result = await db.collection('blog_post').insertOne(data);
    const { insertedId } = result;

    // tag collection에 post id 추가
    const tagCollection = db.collection<TagField>('tag');
    await tagCollection.updateMany(
      { tag: { $in: req.body.tags } },
      { $push: { posts: insertedId } }
    );

    res.status(200).json({ post_id: `${insertedId.toString()}` });
    return;
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
