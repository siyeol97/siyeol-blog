import { memo } from 'react';
import styles from './Tag.module.css';

interface Props {
  tag: string;
  color?: string;
}

function Tag({ tag, color }: Props) {
  return (
    <span
      className={styles.tag}
      style={{
        border: color ?? '1px solid #121212',
        backgroundColor: color && color,
      }}
    >
      {tag}
    </span>
  );
}
export default memo(Tag);
