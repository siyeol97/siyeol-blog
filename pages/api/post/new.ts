import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      res.status(200).json('GET method');
    }
    if (req.method === 'POST') {
      if (req.body.title === '' || req.body.content === '') {
        res.status(500).json('유효하지 않은 형식 입니다.');
      }
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      const result = await db.collection('blog_post').insertOne(req.body);
      const { insertedId } = result;
      res.redirect(302, `/post/${insertedId.toString()}`);
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
