import styles from './Tag.module.css';

interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return <span className={styles.tag}>{tag}</span>;
}
