import styles from '../css/Post.module.css';
import ReplyArea from './ReplyArea';
import { Session } from 'next-auth';
import Content from './Content';
import TitleWrapper from './TitleWrapper';

interface Props {
  post: Post;
  isAuthor: boolean;
  session: Session | null;
}

export default function Post({ post, isAuthor, session }: Props) {
  return (
    <section className={styles.section}>
      <TitleWrapper
        post={post}
        isAuthor={isAuthor}
      />
      <Content post={post} />
      <ReplyArea
        post_id={post._id}
        session={session}
      />
    </section>
  );
}
