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
    if (req.method === 'DELETE') {
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      const session = await getServerSession(req, res, authOptions);
      const post = await db
        .collection('blog_post')
        .findOne({ _id: new ObjectId(req.body) });
      if (!post) {
        throw new Error('post not found');
      }
      if (post.author === session?.user?.email) {
        await db
          .collection('blog_post')
          .deleteOne({ _id: new ObjectId(req.body) });
        res.status(200).json('삭제 성공');
        return;
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to delete' });
  }
}
