import ControlPost from './ControlPost';
import styles from '../css/PostInfo.module.css';
import calculateTime from '@/utils/calculateTime';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function PostInfo({ post, isAuthor }: Props) {
  const created_at = calculateTime(post.created_at);
  return (
    <div className={styles.wrapper}>
      <span className={styles.info}>
        <span>by</span>
        <b>{post.name}</b>
        <span className={styles.created_at}>{created_at}</span>
      </span>
      <div>{isAuthor ? <ControlPost _id={post._id} /> : null}</div>
    </div>
  );
}
