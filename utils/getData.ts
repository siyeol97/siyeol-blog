import { ObjectId } from 'mongodb';
import { connectDB } from './database';

const getPostData = async () => {
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db.collection('blog_post').find().toArray();
  return result;
};

const getSinglePost = async (id: string) => {
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db
    .collection('blog_post')
    .findOne({ _id: new ObjectId(id) });
  return result;
};

export { getPostData, getSinglePost };
