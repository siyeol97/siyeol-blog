import { connectDB } from '@/utils/database';
import Card from './Card';
import styles from './Main.module.css';

export interface Post {
  id: string;
  title: string;
  content: string;
}

const getPostData = async () => {
  const client = await connectDB;
  const db = client.db('siyeol_blog');
  const result = await db.collection('blog_post').find().toArray();
  return result;
};

export default async function Main() {
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
