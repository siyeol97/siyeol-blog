'use client';

import { Post } from '@/app/type';
import styles from '../css/Main.module.css';
import Card from './Card';

export default function Main({ data }: { data: Post[] }) {
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
