import getSinglePost from '@/utils/getSinglePost';
import PostContent from './PostContent';
import getUserData from '@/utils/getUserData';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await getSinglePost(id);
  const userData = await getUserData();
  const data = {
    _id: res!._id.toString(),
    title: res!.title,
    content: res!.content,
    author: res!.author,
  };
  const isSameUser = userData?.email === data.author;

  return (
    <PostContent
      data={data}
      isSameUser={isSameUser}
    />
  );
}
