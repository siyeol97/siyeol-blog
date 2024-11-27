'use client';

import styles from '../css/Main.module.css';
import useSearchPost from '@/hook/useSearchPost';
import SearchInput from './SearchInput';
import PostList from './PostList';
import { useQuery } from '@tanstack/react-query';
import getPostList from '@/utils/getPostList';
import { Post } from '@/app/type';
import Loading from '../loading';
import NoSearch from './NoSearch';

export default function Main() {
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ['post-list'],
    queryFn: () => getPostList(),
  });

  const { searchValue, searchedData, onChange } = useSearchPost(data ?? []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <SearchInput
          searchValue={searchValue}
          onChange={onChange}
        />
        {isLoading ? (
          <Loading />
        ) : searchedData?.length === 0 ? (
          <NoSearch />
        ) : (
          <PostList data={searchedData ?? []} />
        )}
      </div>
    </section>
  );
}
