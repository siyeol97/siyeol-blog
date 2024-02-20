import { getPostData } from '@/utils/getData';
import Card from './Card';
import styles from './Main.module.css';

export interface Post {
  id: string;
  title: string;
  content: string;
}
export default async function MainPage() {
  const data = await getPostData();
  const postItem: Post[] = data.map((post) => {
    return {
      id: post._id.toString(),
      title: post.title,
      content: post.content,
    };
  });
  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {postItem.map((post) => (
          <Card
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    </section>
  );
}
