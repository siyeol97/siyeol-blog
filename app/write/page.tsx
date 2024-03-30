import styles from './css/page.module.css';
import Write from './components/Write';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '새 글 작성',
};

export default async function WritePage() {
  return (
    <div className={styles.wrapper}>
      <Write />
    </div>
  );
}
