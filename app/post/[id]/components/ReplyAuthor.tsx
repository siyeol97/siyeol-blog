import styles from '../css/ReplyAuthor.module.css';

interface Props {
  item: Reply;
}

export default function ReplyAuthor({ item }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.author_name}>{item.author}</p>
    </div>
  );
}
