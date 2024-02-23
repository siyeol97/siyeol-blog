import { getPostData } from '@/utils/getData';
import Main from './Main';

export default async function HomePage() {
  const data = await getPostData();
  const postItem: Post[] = data.map((post) => {
    return {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
    };
  });
  return <Main postItem={postItem} />;
}
