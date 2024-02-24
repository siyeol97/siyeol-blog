'use client';

import { useRouter } from 'next/navigation';
import styles from './PostContent.module.css';
import Link from 'next/link';

interface Props {
  data: Post;
  isSameUser: boolean;
}

export default function PostContent({ data, isSameUser }: Props) {
  const router = useRouter();
  const deletePost = async () => {
    try {
      const response = await fetch('/api/post/delete', {
        method: 'DELETE',
        body: data._id,
      });
      if (response.ok) {
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={styles.section}>
      <div className={styles.post_content}>
        <h1>{data!.title}</h1>
        <p>{data!.content}</p>
      </div>
      {isSameUser ? (
        <>
          <Link href={`/edit/${data._id}`}>글 수정</Link>
          <button onClick={deletePost}>글 삭제</button>
        </>
      ) : null}
    </section>
  );
}
