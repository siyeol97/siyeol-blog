import { authOptions } from '@/pages/api/auth/[...nextauth]';
import getSinglePost from '@/utils/getSinglePost';
import { getServerSession } from 'next-auth';
import styles from './css/page.module.css';
import PostDetail from './components/PostDetail';
import { Post } from '@/app/type';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getSinglePost(id);
  return {
    title: post!.title,
  };
}

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = (await getSinglePost(id)) as Post;

  if (!post) {
    return <div>error</div>;
  }

  const session = await getServerSession(authOptions);
  const isAuthor = session?.user?.email === post.author;

  return (
    <section className={styles.wrapper}>
      <PostDetail
        post={post}
        isAuthor={isAuthor}
        session={session}
      />
    </section>
  );
}
