import { memo } from 'react';
import styles from './Tag.module.css';

interface Props {
  tag: string;
  color?: string;
  postCount?: number;
}

function Tag({ tag, color, postCount }: Props) {
  return (
    <div className={styles.wrapper}>
      <span
        className={styles.tag}
        style={{
          border: color ?? '1px solid #121212',
          color: color ? '#fff' : '#121212',
          backgroundColor: color && color,
        }}
      >
        {tag} {postCount && <span className={styles.count}>({postCount})</span>}
      </span>
    </div>
  );
}
export default memo(Tag);
