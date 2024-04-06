import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      throw new Error();
    }
    req.body = JSON.parse(req.body);

    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const data = {
      user_email: req.body.user_email,
      parent_post: req.body.post_id,
    };
    const result = await db.collection('like').findOne({
      user_email: req.body.user_email,
      parent_post: req.body.post_id,
    });
    if (result?._id) {
      throw new Error('중복 요청');
    }

    await db.collection('like').insertOne(data);
    const likeCount = await db
      .collection('like')
      .countDocuments({ parent_post: req.body.post_id });
    await db
      .collection('blog_post')
      .updateOne(
        { _id: new ObjectId(req.body.post_id) },
        { $set: { like_count: likeCount } }
      );

    res.status(200).json('success to like');
    return;
  } catch (error) {
    res.status(500).json({ error: '오류가 발생했습니다.' });
  }
}
