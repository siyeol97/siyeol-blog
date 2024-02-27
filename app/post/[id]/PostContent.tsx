import styles from './PostContent.module.css';
import ReplyArea from './ReplyArea';
import ControlPost from './ControlPost';

interface Props {
  data: Post;
  isSameUser: boolean;
  CurrentUserData: UserData | null;
}

export default function PostContent({
  data,
  isSameUser,
  CurrentUserData,
}: Props) {
  return (
    <section className={styles.section}>
      <div style={{ display: 'flex' }}>
        <div className={styles.post_content}>
          <h1>{data!.title}</h1>
          <p>{data!.content}</p>
        </div>
        {isSameUser ? <ControlPost _id={data._id} /> : null}
      </div>
      <ReplyArea
        _id={data._id}
        CurrentUserData={CurrentUserData}
      />
    </section>
  );
}
