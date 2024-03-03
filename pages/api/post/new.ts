import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      throw new Error();
    }

    if (req.body.title === '' || req.body.content === '') {
      throw new Error();
    }

    const session = await getServerSession(req, res, authOptions);
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const data = {
      ...req.body,
      name: session?.user?.name,
      author: session?.user?.email,
      author_image: session?.user?.image,
      created_at: new Date(),
    };
    const result = await db.collection('blog_post').insertOne(data);
    const { insertedId } = result;
    res.redirect(302, `/post/${insertedId.toString()}`);
    return;
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
