import Card from './Card';
import styles from './Main.module.css';

interface Props {
  postItem: Post[];
}

export default async function MainPage({ postItem }: Props) {
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
