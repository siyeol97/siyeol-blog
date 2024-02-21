import { getSinglePost } from '@/utils/getData';
import styles from './PostContent.module.css';
import Link from 'next/link';

export default async function PostContent({ id }: { id: string }) {
  const data = await getSinglePost(id);

  return (
    <section className={styles.section}>
      <div className={styles.post_content}>
        <h1>{data!.title}</h1>
        <p>{data!.content}</p>
      </div>
      <Link href={`/edit/${id}`}>글 수정</Link>
    </section>
  );
}
