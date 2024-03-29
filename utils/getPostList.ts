import { connectDB } from './database';

const getPostList = async () => {
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db.collection('blog_post').find().toArray();
  return result.reverse();
};

export default getPostList;
