import ControlPost from './ControlPost';
import styles from '../css/PostInfo.module.css';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function PostInfo({ post, isAuthor }: Props) {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.author}>
          by <b>{post.author}</b>
        </span>
      </div>
      <div>{isAuthor ? <ControlPost _id={post._id} /> : null}</div>
    </div>
  );
}
