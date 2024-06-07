'use client';

import { Post } from '@/app/type';
import styles from '../css/Main.module.css';
import Card from './Card';
import useSearchPost from '@/hook/useSearchPost';
import Image from 'next/image';
import NoSearch from './NoSearch';

export default function Main({ data }: { data: Post[] }) {
  const { searchValue, searchedData, onChange } = useSearchPost(data);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.search_section}>
          <div className={styles.input_container}>
            <input
              type='text'
              className={styles.search_input}
              value={searchValue}
              onChange={onChange}
              placeholder='포스트를 검색해 보세요'
            />
            <Image
              src={'/search-icon.svg'}
              alt='search-icon'
              width={24}
              height={24}
              className={styles.search_icon}
            />
          </div>
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
        {searchedData.length === 0 ? (
          <NoSearch />
        ) : (
          <ul className={styles.ul}>
            {searchedData?.map((post) => (
              <Card
                key={post._id.toString()}
                post={post}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
