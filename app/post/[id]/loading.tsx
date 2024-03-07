import Image from 'next/image';
import styles from './css/loading.module.css';

export default function loading() {
  return (
    <div className={styles.loading}>
      <Image
        src={'/loading.gif'}
        alt='loading'
        width={64}
        height={64}
      />
    </div>
  );
}
