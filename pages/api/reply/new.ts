import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      throw new Error('Invaild Access');
    }
    if (req.method === 'POST') {
      req.body = JSON.parse(req.body);
      if (!req.body.comment) {
        res.status(500).json('유효하지 않은 형식 입니다.');
        return;
      }
      const session = await getServerSession(req, res, authOptions);
      if (!session || !session.user) {
        throw new Error();
      }
      const client = await connectDB;
      const db = client.db('siyeol_blog');

      const data = {
        comment: req.body.comment,
        parent_post: new ObjectId(req.body.post_id),
        author: session.user.email,
        author_image: session.user.image,
        name: session.user.name,
      };

      await db.collection('reply').insertOne(data);
      res.status(200).json('success to write reply');
      return;
    }
  } catch (error) {
    res.status(500).json('failed to write reply');
  }
}
