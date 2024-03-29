import styles from './css/page.module.css';
import Write from './components/Write';

export default async function WritePage() {
  return (
    <div className={styles.wrapper}>
      <Write />
    </div>
  );
}
