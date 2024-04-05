import Image from 'next/image';
import styles from '../css/ReplyAuthor.module.css';
import calculateTime from '@/utils/calculateTime';
import DefaultAvatar from '@/components/DefaultAvatar';
import { Reply } from '@/app/type';

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
        <DefaultAvatar name={reply.name.slice(-2)} />
      )}
      <div className={styles.info_text}>
        <p className={styles.author_name}>{reply.name}</p>
        <span className={styles.created_at}>{createdAt}</span>
      </div>
    </div>
  );
}
