import { memo } from 'react';
import styles from './Tag.module.css';

interface Props {
  tag: string;
  color?: string;
  postCount?: number;
  onClick?: () => void;
  selected?: boolean;
}

function Tag({ tag, color, postCount, onClick, selected }: Props) {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
    >
      <span
        className={styles.tag}
        style={{
          border: color ?? '1px solid #121212',
          color: color ? '#fff' : '#121212',
          backgroundColor: color && color,
          opacity: !selected ? 0.4 : 1,
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        {tag} {postCount && <span className={styles.count}>({postCount})</span>}
      </span>
    </div>
  );
}
export default memo(Tag);
