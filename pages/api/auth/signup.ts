import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const userAccount = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      };
      await db.collection('created_user_account').insertOne(userAccount);
      res.redirect(302, '/');
      return;
    }
  } catch (error) {
    res.status(500).json('failed to sign up');
  }
}
