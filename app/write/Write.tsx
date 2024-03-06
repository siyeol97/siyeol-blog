import Preview from './Preview';
import styles from './Write.module.css';
import WriteForm from './WriteForm';

export default function Write() {
  return (
    <section className={styles.section}>
      <WriteForm />
      <Preview />
    </section>
  );
}
