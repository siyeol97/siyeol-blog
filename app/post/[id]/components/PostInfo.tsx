import ControlPost from './ControlPost';
import styles from '../css/PostInfo.module.css';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function PostInfo({ post, isAuthor }: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.author}>
        by <b>{post.name}</b>
      </span>
      <div>{isAuthor ? <ControlPost _id={post._id} /> : null}</div>
    </div>
  );
}
