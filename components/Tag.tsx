import { memo } from 'react';
import styles from './Tag.module.css';

interface Props {
  tag: string;
}

function Tag({ tag }: Props) {
  return <span className={styles.tag}>{tag}</span>;
}
export default memo(Tag);
