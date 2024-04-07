'use client';

import getPostList from '@/utils/getPostList';
import { useQuery } from '@tanstack/react-query';
import styles from '../css/Main.module.css';
import Card from './Card';
import Loading from '../loading';
import { Post } from '@/app/type';

export default function Main() {
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ['post-list'],
    queryFn: () => getPostList(),
    staleTime: 20 * 1000,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {data?.map((post) => (
          <Card
            key={post._id.toString()}
            post={post}
          />
        ))}
      </ul>
    </section>
  );
}
