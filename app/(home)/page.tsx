import { connectDB } from '@/utils/database';
import Main from './Main';

const getPostList = async () => {
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db.collection('blog_post').find().toArray();
  return result;
};

export default async function HomePage() {
  const data = await getPostList();
  const postItem: Post[] = data.map((post) => {
    return {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      author: post.author,
    };
  });
  return <Main postItem={postItem} />;
}
