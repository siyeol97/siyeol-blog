import { ObjectId } from 'mongodb';
import { connectDB } from './database';

const getReplyList = async (_id: string) => {
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db
    .collection('reply')
    .find({ parent_post: new ObjectId(_id) })
    .toArray();
  const count = result.length;
  return count;
};

export default getReplyList;
