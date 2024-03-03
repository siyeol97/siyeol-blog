import { Post } from '@/type';
import styles from '../css/Content.module.css';

interface Props {
  post: Post;
}

export default function Content({ post }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}
