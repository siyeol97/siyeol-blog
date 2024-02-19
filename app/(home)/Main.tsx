import Card from './Card';
import styles from './Main.module.css';

export default function Main() {
  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
}
