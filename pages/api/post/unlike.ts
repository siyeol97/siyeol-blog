import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'DELETE') {
      throw new Error();
    }
    req.body = JSON.parse(req.body);
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    await db.collection('like').deleteOne({
      user_email: req.body.user_email,
      parent_post: req.body.post_id,
    });
    const likeCount = await db
      .collection('like')
      .countDocuments({ parent_post: req.body.post_id });
    await db
      .collection('blog_post')
      .updateOne(
        { _id: new ObjectId(req.body.post_id) },
        { $set: { like_count: likeCount } }
      );
    res.status(200).json('success to unlike');
    return;
  } catch (error) {
    res.status(500).json({ error: 'failed to unlike' });
  }
}
