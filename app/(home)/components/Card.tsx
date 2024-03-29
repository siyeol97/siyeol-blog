import Image from 'next/image';
import styles from '../css/Card.module.css';
import Link from 'next/link';
import getReplyList from '@/utils/getReplyList';
import calculateTime from '@/utils/calculateTime';
import filterText from '@/utils/filterText';

interface Props {
  post: Post;
}

export default async function Card({ post }: Props) {
  const createdAt = calculateTime(post.created_at);
  const replyCount = await getReplyList(post._id);
  const content = filterText(post.content);
  return (
    <li className={styles.card}>
      <Link href={`/post/${post._id}`}>
        <div className={styles.card_preview}>
          <div className={styles.card_preview_text}>
            <h2 className={`${styles.card_article} ${styles.article_title} `}>
              {post.title}
            </h2>
            <p className={`${styles.card_article} ${styles.article_body}`}>
              {content}
            </p>
          </div>
          <div className={styles.thumbnail}>
            <Image
              fill
              sizes='130px'
              src={'/default-img.jpeg'}
              alt='default-image'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </Link>
      <div className={styles.card_bottom}>
        <span className={styles.writer}>
          by <b>{post.name}</b>ㆍ<span>{createdAt}</span>
        </span>
        <div className={styles.like_comment}>
          <span>❤ 999</span>
          <span>💬 {replyCount}</span>
        </div>
      </div>
    </li>
  );
}
