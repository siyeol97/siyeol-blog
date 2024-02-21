import PostContent from './PostContent';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <PostContent id={id} />;
}
