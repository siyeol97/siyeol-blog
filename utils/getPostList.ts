import { connectDB } from './database';

const getPostList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db.collection('blog_post').find().toArray();
  return result;
};

export default getPostList;
