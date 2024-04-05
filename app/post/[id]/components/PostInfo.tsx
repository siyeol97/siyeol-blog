import ControlPost from './ControlPost';
import styles from '../css/PostInfo.module.css';
import calculateTime from '@/utils/calculateTime';
import { Post } from '@/app/type';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function PostInfo({ post, isAuthor }: Props) {
  const createdAt = calculateTime(post.created_at);
  return (
    <div className={styles.wrapper}>
      <span className={styles.info}>
        <span>by</span>
        <b>{post.name}</b>ㆍ
        <span className={styles.created_at}>{createdAt}</span>
      </span>
      <div>{isAuthor ? <ControlPost _id={post._id.toString()} /> : null}</div>
    </div>
  );
}
