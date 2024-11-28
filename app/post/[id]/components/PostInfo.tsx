import ControlPost from './ControlPost';
import styles from '../css/PostInfo.module.css';
import calculateTime from '@/utils/calculateTime';
import { Post } from '@/app/type';
import Image from 'next/image';
import DefaultAvatar from '@/components/DefaultAvatar';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function PostInfo({ post, isAuthor }: Props) {
  const createdAt = calculateTime(post.created_at);
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        {post.author_image ? (
          <Image
            src={post.author_image}
            alt='user-avatar'
            width={30}
            height={30}
            className={styles.author_avatar}
          />
        ) : (
          <DefaultAvatar name={post.name.slice(-2)} />
        )}
        <span>by</span>
        <b>{post.name}</b>ㆍ
        <span className={styles.created_at}>{createdAt}</span>
      </div>
      {isAuthor ? <ControlPost _id={post._id.toString()} /> : null}
    </div>
  );
}
