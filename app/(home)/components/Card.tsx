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
          <div className={styles.social}>
            <div className={styles.like}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  d='M11.2508 3.36765C9.22157 3.36765 8.22135 5.36808 8.22135 5.36808C8.22135 5.36808 7.22114 3.36765 5.19194 3.36765C3.54283 3.36765 2.23692 4.74732 2.22005 6.39362C2.18566 9.81092 4.93095 12.2411 7.94004 14.2835C8.023 14.3399 8.12102 14.3701 8.22135 14.3701C8.32169 14.3701 8.41971 14.3399 8.50266 14.2835C11.5114 12.2411 14.2567 9.81092 14.2227 6.39362C14.2058 4.74732 12.8999 3.36765 11.2508 3.36765Z'
                  stroke='black'
                  strokeWidth='1.00189'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>{post.like_count}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
