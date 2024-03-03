import styles from './DefaultAvatar.module.css';

export default function DefaultAvatar({ name }: { name: string | undefined }) {
  return <div className={styles.default_avatar}>{name}</div>;
}
