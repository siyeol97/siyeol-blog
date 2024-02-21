import { getPostData } from '@/utils/getData';
import Main from './Main';

export interface Post {
  id: string;
  title: string;
  content: string;
}

export default async function HomePage() {
  const data = await getPostData();
  const postItem: Post[] = data.map((post) => {
    return {
      id: post._id.toString(),
      title: post.title,
      content: post.content,
    };
  });
  return <Main postItem={postItem} />;
}
