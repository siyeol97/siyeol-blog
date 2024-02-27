import getSinglePost from '@/utils/getSinglePost';
import PostContent from './PostContent';
import getUserData from '@/utils/getUserData';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await getSinglePost(id);
  const CurrentUserData = await getUserData();
  const post = {
    _id: res!._id.toString(),
    title: res!.title,
    content: res!.content,
    author: res!.author,
  };
  const isSameUser = CurrentUserData?.email === post.author;

  return (
    <PostContent
      post={post}
      isSameUser={isSameUser}
      CurrentUserData={CurrentUserData}
    />
  );
}
