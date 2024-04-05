import styles from '../css/Post.module.css';
import ReplyArea from './ReplyArea';
import { Session } from 'next-auth';
import Content from './Content';
import TitleWrapper from './TitleWrapper';
import { Post } from '@/app/type';

interface Props {
  post: Post;
  isAuthor: boolean;
  session: Session | null;
}

export default function PostDetail({ post, isAuthor, session }: Props) {
  return (
    <section className={styles.post}>
      <TitleWrapper
        post={post}
        isAuthor={isAuthor}
      />
      <Content post={post} />
      <ReplyArea
        post_id={post._id.toString()}
        session={session}
      />
    </section>
  );
}
