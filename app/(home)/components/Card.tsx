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
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M11.9904 19.708C11.7763 19.708 11.5612 19.6695 11.3452 19.5926C11.1291 19.5157 10.9391 19.3952 10.775 19.2311L9.33848 17.9253C7.56539 16.3086 5.98238 14.7205 4.58943 13.1609C3.19648 11.6013 2.5 9.93045 2.5 8.14841C2.5 6.7292 2.97852 5.54106 3.93558 4.58401C4.89263 3.62696 6.08076 3.14844 7.49998 3.14844C8.30638 3.14844 9.10285 3.33434 9.8894 3.70614C10.6759 4.07794 11.3795 4.68179 12 5.51769C12.6205 4.68179 13.324 4.07794 14.1105 3.70614C14.8971 3.33434 15.6936 3.14844 16.5 3.14844C17.9192 3.14844 19.1073 3.62696 20.0644 4.58401C21.0214 5.54106 21.5 6.7292 21.5 8.14841C21.5 9.94968 20.7916 11.6391 19.375 13.2167C17.9583 14.7942 16.3788 16.3689 14.6365 17.9407L13.2154 19.2311C13.0513 19.3952 12.8596 19.5157 12.6404 19.5926C12.4211 19.6695 12.2045 19.708 11.9904 19.708ZM11.2808 7.03689C10.7397 6.21252 10.1702 5.60835 9.5721 5.22439C8.97402 4.8404 8.28331 4.64841 7.49998 4.64841C6.49998 4.64841 5.66664 4.98175 4.99998 5.64841C4.33331 6.31508 3.99998 7.14841 3.99998 8.14841C3.99998 8.95098 4.25863 9.79008 4.77593 10.6657C5.29323 11.5413 5.94257 12.4118 6.72398 13.2772C7.50539 14.1426 8.35187 14.9881 9.2634 15.8138C10.1749 16.6394 11.0198 17.4067 11.798 18.1157C11.8557 18.167 11.923 18.1926 12 18.1926C12.0769 18.1926 12.1442 18.167 12.2019 18.1157C12.9801 17.4067 13.825 16.6394 14.7366 15.8138C15.6481 14.9881 16.4946 14.1426 17.276 13.2772C18.0574 12.4118 18.7067 11.5413 19.224 10.6657C19.7413 9.79008 20 8.95098 20 8.14841C20 7.14841 19.6666 6.31508 19 5.64841C18.3333 4.98175 17.5 4.64841 16.5 4.64841C15.7166 4.64841 15.0259 4.8404 14.4279 5.22439C13.8298 5.60835 13.2602 6.21252 12.7192 7.03689C12.6346 7.16509 12.5282 7.26125 12.4 7.32536C12.2718 7.38946 12.1384 7.42151 12 7.42151C11.8615 7.42151 11.7282 7.38946 11.6 7.32536C11.4718 7.26125 11.3654 7.16509 11.2808 7.03689Z'
                  fill='#6E6E82'
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
