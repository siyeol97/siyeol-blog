import LoadingCard from './components/LoadingCard';
import styles from './css/loading.module.css';

export default function loading() {
  const arr = [1, 2, 3, 4];
  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {arr.map((i) => (
          <LoadingCard key={i} />
        ))}
      </ul>
    </section>
  );
}
