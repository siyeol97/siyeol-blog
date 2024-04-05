import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const result = (
      await db.collection('blog_post').find().toArray()
    ).reverse();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ error: 'failed to load' });
  }
}
