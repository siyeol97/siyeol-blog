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
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const result = await db
      .collection('like')
      .countDocuments({ parent_post: req.body });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
