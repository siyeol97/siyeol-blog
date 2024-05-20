'use client';

import calculateTime from '@/utils/calculateTime';
import filterText from '@/utils/filterText';
import Link from 'next/link';
import styles from '../css/Card.module.css';
import { Post } from '@/app/type';

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  const createdAt = calculateTime(new Date(post.created_at));
  const content = filterText(post.content);
  return (
    <>
      <hr className={styles.separator} />
      <li className={styles.card}>
        <Link href={`/post/${post._id.toString()}`}>
          <div className={styles.card_preview}>
            <div className={styles.card_preview_text}>
              <h2 className={`${styles.card_article} ${styles.article_title} `}>
                {post.title}
              </h2>
              <p className={`${styles.card_article} ${styles.article_body}`}>
                {content}
              </p>
            </div>
          </div>
        </Link>
        <div className={styles.card_bottom}>
          <span className={styles.writer}>
            by <b>{post.name}</b>ㆍ<span>{createdAt}</span>
          </span>
        </div>
      </li>
    </>
  );
}
