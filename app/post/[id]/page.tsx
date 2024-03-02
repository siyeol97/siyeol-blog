import { authOptions } from '@/pages/api/auth/[...nextauth]';
import getSinglePost from '@/utils/getSinglePost';
import { getServerSession } from 'next-auth';
import PostContent from './PostContent';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await getSinglePost(id);
  const session = await getServerSession(authOptions);
  const post = {
    _id: res!._id.toString(),
    title: res!.title,
    content: res!.content,
    author: res!.author,
  };
  const isSameUser = session?.user?.email === post.author;

  return (
    <PostContent
      post={post}
      isSameUser={isSameUser}
      session={session}
    />
  );
}
