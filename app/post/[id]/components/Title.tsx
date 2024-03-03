import styles from '../css/Title.module.css';

interface Props {
  post: Post;
}

export default function Title({ post }: Props) {
  return <h1 className={styles.wrapper}>{post.title}</h1>;
}
