'use client';

import { Post } from '@/app/type';
import styles from '../css/Main.module.css';
import Card from './Card';
import useSearchPost from '@/hook/useSearchPost';

export default function Main({ data }: { data: Post[] }) {
  const { searchValue, searchedData, onChange } = useSearchPost(data);

  return (
    <section className={styles.section}>
      <div className={styles.search_section}>
        <input
          type='text'
          className={styles.search}
          value={searchValue}
          onChange={onChange}
        />
        <p
          className={styles.search_text}
          style={{ visibility: searchValue ? 'visible' : 'hidden' }}
        >
          <span className={styles.search_value}>
            &lsquo;{searchValue}&rsquo;
          </span>
          &nbsp;검색 결과입니다.
        </p>
      </div>
      <ul className={styles.ul}>
        {searchedData?.map((post) => (
          <Card
            key={post._id.toString()}
            post={post}
          />
        ))}
      </ul>
    </section>
  );
}
