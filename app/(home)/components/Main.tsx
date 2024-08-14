'use client';

import { Post } from '@/app/type';
import styles from '../css/Main.module.css';
import useSearchPost from '@/hook/useSearchPost';
import NoSearch from './NoSearch';
import SearchInput from './SearchInput';
import PostList from './PostList';

export default function Main({ data }: { data: Post[] }) {
  const { searchValue, searchedData, onChange } = useSearchPost(data);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <SearchInput
          searchValue={searchValue}
          onChange={onChange}
        />
        {searchedData.length === 0 ? (
          <NoSearch />
        ) : (
          <PostList searchedData={searchedData} />
        )}
      </div>
    </section>
  );
}
