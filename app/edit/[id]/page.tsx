import { getServerSession } from 'next-auth';
import Edit from './Edit';
import styles from './page.module.css';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import getSinglePost from '@/utils/getSinglePost';
import { redirect } from 'next/navigation';

export default async function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const result = await getSinglePost(id);

  if (!result) {
    redirect('/');
  }

  if (!session || session.user?.email !== result?.author) {
    redirect(`/post/${id}`);
  }

  const post = {
    title: result.title,
    content: result.content,
  };

  return (
    <div className={styles.wrapper}>
      <Edit
        post={post}
        _id={id}
      />
    </div>
  );
}
