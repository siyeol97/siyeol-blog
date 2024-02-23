import { getSinglePost } from '@/utils/getData';
import PostContent from './PostContent';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await getSinglePost(id);
  const data = {
    _id: res!._id.toString(),
    title: res!.title,
    content: res!.content,
  };

  return <PostContent data={data} />;
}
