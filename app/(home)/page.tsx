import getPostList from '@/utils/getPostList';
import Main from './Main';

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
