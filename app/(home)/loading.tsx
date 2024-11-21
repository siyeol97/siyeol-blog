// import LoadingCard from './components/LoadingCard';
import Image from 'next/image';
import styles from './css/loading.module.css';

export default function Loading() {
  // const arr = [1, 2, 3, 4, 5];
  // return (
  //   <section className={styles.section}>
  //     <ul className={styles.ul}>
  //       {arr.map((i) => (
  //         <LoadingCard key={i} />
  //       ))}
  //     </ul>
  //   </section>
  // );
  return (
    <Image
      src={'/loading.gif'}
      alt='loading-image'
      width={40}
      height={40}
      className={styles.loading}
    />
  );
}
