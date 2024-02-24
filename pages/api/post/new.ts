import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      throw new Error('Invaild Access');
    }
    if (req.method === 'POST') {
      if (req.body.title === '' || req.body.content === '') {
        res.status(500).json('유효하지 않은 형식 입니다.');
      }
      const session = await getServerSession(req, res, authOptions);
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      const data = { ...req.body, author: session?.user?.email };
      const result = await db.collection('blog_post').insertOne(data);
      const { insertedId } = result;
      res.redirect(302, `/post/${insertedId.toString()}`);
      return;
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
