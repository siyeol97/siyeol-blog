import { authOptions } from '@/pages/api/auth/[...nextauth]';
import getSinglePost from '@/utils/getSinglePost';
import { getServerSession } from 'next-auth';
import styles from './css/page.module.css';
import Post from './components/Post';

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
  const isAuthor = session?.user?.email === post.author;

  return (
    <section className={styles.wrapper}>
      <Post
        post={post}
        isAuthor={isAuthor}
        session={session}
      />
    </section>
  );
}
