import getSinglePost from '@/utils/getSinglePost';
import styles from './Edit.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

export default async function Edit({ _id }: { _id: string }) {
  const session = await getServerSession(authOptions);
  const result = await getSinglePost(_id);
  if (!session || session.user?.email !== result?.author) {
    redirect(`/post/${_id}`);
  }
  return (
    <section className={styles.section}>
      <form
        action='/api/post/edit'
        method='POST'
        className={styles.edit_content}
      >
        <input
          type='text'
          name='title'
          defaultValue={result!.title}
        />
        <textarea
          name='content'
          defaultValue={result!.content}
        />
        <input
          type='text'
          name='_id'
          defaultValue={result!._id.toString()}
          className={styles.hide_id}
        />
        <button type='submit'>저장하기</button>
      </form>
    </section>
  );
}
