import getPostList from '@/utils/getPostList';
import Main from './components/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const data = await getPostList();
  const postItem: Post[] = data.map((post) => {
    return {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      name: post.name,
      author: post.author,
      author_image: post.author_image,
      created_at: post.created_at,
    };
  });
  return <Main postItem={postItem} />;
}
