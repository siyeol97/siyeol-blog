import Image from 'next/image';
import styles from '../css/ReplyAuthor.module.css';

interface Props {
  item: Reply;
}

export default function ReplyAuthor({ item }: Props) {
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
        <div className={styles.default_avatar}>{item.name.slice(-2)}</div>
      )}

      <p className={styles.author_name}>{item.name}</p>
    </div>
  );
}
