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
    const data = {
      user_email: req.body.user_email,
      parent_post: req.body.post_id,
    };
    await db.collection('like').insertOne(data);
    res.status(200).json('success to like');
    return;
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
