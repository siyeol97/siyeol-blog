import Skeleton from '@/app/(home)/components/Skeleton';
import styles from './css/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.header}>
        <Skeleton height='75px' />
        <Skeleton
          width='170px'
          height='24px'
        />
        <Skeleton
          width='120px'
          height='20px'
        />
      </div>
      <div className={styles.body}>
        <Skeleton
          width='280px'
          height='40px'
        />
        <Skeleton
          width='360px'
          height='24px'
        />
        <Skeleton
          width='280px'
          height='24px'
        />
        <Skeleton
          width='150px'
          height='24px'
        />
        <Skeleton
          width='375px'
          height='24px'
        />
      </div>
    </div>
  );
}
