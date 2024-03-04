import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      req.body = JSON.parse(req.body);
      const client = await connectDB;
      const db = client.db('siyeol_blog');

      const result = await db
        .collection('created_user_account')
        .find({ email: req.body })
        .toArray();
      res.status(200).json(result);
      return;
    }
    return;
  } catch (error) {
    res.status(500).json('failed to sign up');
  }
}
