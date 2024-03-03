import Card from './Card';
import styles from '../css/Main.module.css';

interface Props {
  postItem: Post[];
}

export default function Main({ postItem }: Props) {
  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {postItem.map((post) => (
          <Card
            key={post._id}
            post={post}
          />
        ))}
      </ul>
    </section>
  );
}
