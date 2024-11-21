import { ObjectId } from 'mongodb';
import { connectDB } from './database';

const getSinglePost = async (id: string) => {
  const startTime = Date.now();

  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db
    .collection('blog_post')
    .findOne({ _id: new ObjectId(id) });

  console.log(`포스트 요청 소요 시간 ${Date.now() - startTime}ms`);
  return result;
};

export default getSinglePost;
