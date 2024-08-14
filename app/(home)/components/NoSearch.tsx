import { memo } from 'react';
import styles from '../css/NoSearch.module.css';

const NoSearch = memo(() => {
  return <div className={styles.wrapper}>검색 결과가 없습니다!</div>;
});

NoSearch.displayName = 'NoSearch';

export default NoSearch;
