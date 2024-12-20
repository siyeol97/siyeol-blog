import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const result = await db
      .collection('blog_post')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ error: 'failed to load post list' });
  }
}
