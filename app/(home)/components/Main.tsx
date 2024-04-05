'use client';

import getPostList from '@/utils/getPostList';
import { useQuery } from '@tanstack/react-query';
import styles from '../css/Main.module.css';
import Card from './Card';
import Loading from '../loading';

export default function Main() {
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ['post-list'],
    queryFn: () => getPostList(),
    staleTime: 30 * 1000,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>error</div>;
  }

  const postItem: Post[] = data.map((post) => {
    return {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      name: post.name,
      author: post.author,
      author_image: post.author_image,
      created_at: post.created_at,
    };
  });
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
