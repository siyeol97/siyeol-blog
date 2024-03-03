import Image from 'next/image';
import styles from '../css/ReplyAuthor.module.css';
import calculateTime from '@/utils/calculateTime';

interface Props {
  reply: Reply;
}

export default function ReplyAuthor({ reply }: Props) {
  const createdAt = calculateTime(new Date(reply.created_at));
  return (
    <div className={styles.wrapper}>
      {reply.author_image ? (
        <Image
          src={reply.author_image}
          alt='user-avatar'
          width={30}
          height={30}
          className={styles.author_avatar}
        />
      ) : (
        <div className={styles.default_avatar}>{reply.name.slice(-2)}</div>
      )}
      <div className={styles.info_text}>
        <p className={styles.author_name}>{reply.name}</p>
        <span className={styles.created_at}>{createdAt}</span>
      </div>
    </div>
  );
}
