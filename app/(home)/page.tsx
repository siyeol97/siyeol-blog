import { headers } from 'next/headers';
import Main from './Main';

export default async function HomePage() {
  const host = headers().get('host');
  const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  const result = await fetch(`${protocol}://${host}/api/post/pid`, {
    cache: 'no-store',
  });
  const data: Post[] = await result.json();
  const postItem: Post[] = data.map((post) => {
    return {
      _id: post._id,
      title: post.title,
      content: post.content,
      author: post.author,
    };
  });
  return <Main postItem={postItem} />;
}
