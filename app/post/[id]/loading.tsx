import Skeleton from '@/app/(home)/components/Skeleton';
import styles from './css/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.header}>
        <Skeleton height='75px' />
        <Skeleton
          width='25%'
          height='24px'
        />
        <Skeleton
          width='15%'
          height='20px'
        />
      </div>
      <div className={styles.body}>
        <Skeleton
          width='70%'
          height='40px'
        />
        <Skeleton
          width='80%'
          height='24px'
        />
        <Skeleton
          width='50%'
          height='24px'
        />
        <Skeleton
          width='40%'
          height='24px'
        />
        <Skeleton
          width='75%'
          height='24px'
        />
      </div>
    </div>
  );
}
