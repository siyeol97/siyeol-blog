import styles from './PostContent.module.css';
import Link from 'next/link';

interface Props {
  data: Post;
}

export default async function PostContent({ data }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.post_content}>
        <h1>{data!.title}</h1>
        <p>{data!.content}</p>
      </div>
      <Link href={`/edit/${data._id}`}>글 수정</Link>
    </section>
  );
}
