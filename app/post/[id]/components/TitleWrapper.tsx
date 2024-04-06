import PostInfo from './PostInfo';
import PostTag from './PostTag';
import Title from './Title';
import styles from '../css/TitleWrapper.module.css';
import { Post } from '@/app/type';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function TitleWrapper({ post, isAuthor }: Props) {
  return (
    <div className={styles.wrapper}>
      <Title post={post} />
      <PostInfo
        isAuthor={isAuthor}
        post={post}
      />
      <PostTag />
      <hr className={styles.separator} />
    </div>
  );
}
