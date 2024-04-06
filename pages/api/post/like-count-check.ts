import { connectDB } from '@/utils/database';
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
    const count = await db
      .collection('like')
      .countDocuments({ parent_post: req.body.post_id });
    const data = await db.collection('like').findOne({
      user_email: req.body.user_email,
      parent_post: req.body.post_id,
    });
    const isLiked = !!data;

    res.status(200).json({ count: count, isLiked: isLiked });
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
