import { headers } from 'next/headers';
import Main from './Main';

export default async function HomePage() {
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  const result = await fetch(`${protocal}://${host}/api/pid`, {
    cache: 'no-store',
  });
  const data: Post[] = await result.json();
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
