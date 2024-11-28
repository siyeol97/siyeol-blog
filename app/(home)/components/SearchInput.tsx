import { ChangeEvent, memo } from 'react';
import styles from '../css/SearchInput.module.css';
import Image from 'next/image';

interface Props {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ searchValue, onChange }: Props) {
  return (
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
        <span className={styles.search_value}>&lsquo;{searchValue}&rsquo;</span>
        &nbsp;검색 결과입니다.
      </p>
    </div>
  );
}

export default memo(SearchInput);
