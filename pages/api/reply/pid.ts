import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('댓글 api 요청 들어옴');
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const result = await db
      .collection('reply')
      .find({ parent_post: new ObjectId(req.body) })
      .toArray();
    console.log('============');
    console.log('API 요청완료 !!!!!!!');
    console.log('============');
    res.status(200).json(result);
    return;
  } catch (error) {
    res.status(500).send({ error: 'failed to load' });
  }
}
