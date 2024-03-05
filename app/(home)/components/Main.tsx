import Card from './Card';
import styles from '../css/Main.module.css';
import filterText from '@/utils/filterText';

interface Props {
  postItem: Post[];
}

export default function Main({ postItem }: Props) {
  console.log(filterText(postItem[0].content));
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
