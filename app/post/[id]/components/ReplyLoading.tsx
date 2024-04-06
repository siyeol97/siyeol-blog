import Skeleton from '@/app/(home)/components/Skeleton';
import styles from '../css/ReplyLoading.module.css';

export default function ReplyLoading() {
  return (
    <div className={styles.wrapper}>
      <Skeleton
        width='68px'
        height='24px'
      />
      <div className={styles.input}>
        <Skeleton height='100px' />
        <Skeleton
          width='92px'
          height='42px'
        />
      </div>
      <div className={styles.reply}>
        <div className={styles.reply_author}>
          <Skeleton
            width='30px'
            height='30px'
          />
          <Skeleton
            width='48px'
            height='28px'
          />
          <Skeleton
            width='32px'
            height='18px'
          />
        </div>
        <Skeleton
          width='240px'
          height='24px'
        />
      </div>
    </div>
  );
}
