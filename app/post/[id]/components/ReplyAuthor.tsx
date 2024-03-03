import Image from 'next/image';
import styles from '../css/ReplyAuthor.module.css';
import { Session } from 'next-auth';

interface Props {
  item: Reply;
  session: Session | null;
}

export default function ReplyAuthor({ item, session }: Props) {
  return (
    <div className={styles.wrapper}>
      {item.author_image ? (
        <Image
          src={item.author_image}
          alt='user-avatar'
          width={30}
          height={30}
          className={styles.author_avatar}
        />
      ) : (
        <div className={styles.default_avatar}>
          {session?.user!.name?.slice(-2)}
        </div>
      )}

      <p className={styles.author_name}>{item.name}</p>
    </div>
  );
}
