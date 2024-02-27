import styles from './PostContent.module.css';
import ReplyArea from './ReplyArea';
import ControlPost from './ControlPost';

interface Props {
  post: Post;
  isSameUser: boolean;
  CurrentUserData: UserData | null;
}

export default function PostContent({
  post,
  isSameUser,
  CurrentUserData,
}: Props) {
  return (
    <section className={styles.section}>
      <div style={{ display: 'flex' }}>
        <div className={styles.post_content}>
          <h1>{post!.title}</h1>
          <p>{post!.content}</p>
        </div>
        {isSameUser ? <ControlPost _id={post._id} /> : null}
      </div>
      <ReplyArea
        post_id={post._id}
        CurrentUserData={CurrentUserData}
      />
    </section>
  );
}
