import Skeleton from './Skeleton';
import styles from '../css/LoadingCard.module.css';

export default function LoadingCard() {
  return (
    <>
      <hr className={styles.separator} />
      <div className={styles.card}>
        <div className={styles.card_preview}>
          <div className={styles.card_preview_text}>
            <Skeleton
              width={'80%'}
              height={'40px'}
            />
            <Skeleton
              width={'100%'}
              height={'14px'}
            />
            <Skeleton
              width={'100%'}
              height={'14px'}
            />
          </div>
        </div>
        <div className={styles.card_bottom}>
          <Skeleton
            width={'120px'}
            height={'14px'}
          />
          <div className={styles.social}>
            <Skeleton
              width={'30px'}
              height={'14px'}
            />
            <Skeleton
              width={'30px'}
              height={'14px'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
