import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectDB;
    const db = client.db('siyeol_blog');
    const result = await db
      .collection('blog_post')
      .find()
      .sort({ _id: -1 }) // 데이터베이스에 저장된 시간 역순(최신순)으로 정렬
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ error: 'failed to load' });
  }
}
