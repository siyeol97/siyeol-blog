import Image from 'next/image';
import defaultImage from '@/public/next.svg';
import styles from './Card.module.css';
import { Post } from './Main';

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <li className={styles.li}>
      <figure className={styles.figure}>
        <Image
          fill
          src={defaultImage}
          alt='default-image'
          priority
        />
      </figure>
      <div className={styles.card_main_text}>
        <h4 className={`${styles.card_article} ${styles.article_title} `}>
          {post.title}
        </h4>
        <p className={`${styles.card_article} ${styles.article_body}`}>
          {post.content}
        </p>
      </div>
      <div className={styles.card_bottom}>
        <div>
          <span className={styles.by}>by </span>
          <span className={styles.writer}>이시열</span>
        </div>
        <div className={styles.like_comment}>
          <span>❤ 99</span>
          <span>💬 140</span>
        </div>
      </div>
    </li>
  );
}
