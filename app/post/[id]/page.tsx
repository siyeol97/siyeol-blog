import { getSinglePost } from '@/utils/getData';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getSinglePost(id);

  return (
    <div>
      <h3>{data!.title}</h3>
      <p>{data!.content}</p>
    </div>
  );
}
