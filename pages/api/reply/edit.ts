import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    req.body = JSON.parse(req.body);
    if (req.method === 'POST') {
      if (req.body.comment === '') {
        res.status(500).json('유효하지 않은 형식 입니다.');
        return;
      }
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      const session = await getServerSession(req, res, authOptions);
      const reply = await db
        .collection('reply')
        .findOne({ _id: new ObjectId(req.body.reply_id) });
      if (!reply) {
        throw new Error('post not found');
      }

      if (reply.author === session?.user?.email) {
        await db
          .collection('reply')
          .updateOne(
            { _id: new ObjectId(req.body.reply_id) },
            { $set: { comment: req.body.comment } }
          );
        res.status(200).json('success');
        return;
      }
      throw new Error('잘못된 접근입니다.');
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
