import styles from './Card.module.css';
import Link from 'next/link';

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <li className={styles.li}>
      <Link href={`/post/${post._id}`}>
        <div className={styles.card_main_text}>
          <h4 className={`${styles.card_article} ${styles.article_title} `}>
            {post.title}
          </h4>
          <p className={`${styles.card_article} ${styles.article_body}`}>
            {post.content}
          </p>
        </div>
      </Link>
      <div className={styles.card_bottom}>
        <span className={styles.writer}>
          by <b>이시열</b>
        </span>
        <div className={styles.like_comment}>
          <span>❤ 999</span>
          <span>💬 999</span>
        </div>
      </div>
    </li>
  );
}
