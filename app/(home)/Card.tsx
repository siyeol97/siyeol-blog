import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <li className={styles.li}>
      <Link href={`/post/${post._id}`}>
        <div className={styles.card_preview}>
          <div className={styles.card_preview_text}>
            <h4 className={`${styles.card_article} ${styles.article_title} `}>
              {post.title}
            </h4>
            <hr
              style={{
                backgroundColor: 'white',
                border: 'none',
                height: '0.1px',
              }}
            />
            <p className={`${styles.card_article} ${styles.article_body}`}>
              {post.content}
            </p>
          </div>
          <Image
            fill
            sizes='300px'
            src={'/default-img.jpeg'}
            alt='default-image'
            priority
          />
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
