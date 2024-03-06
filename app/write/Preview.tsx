import styles from './Preview.module.css';

export default function Preview() {
  return (
    <section className={styles.section}>
      <textarea
        className={styles.preview_title}
        value={'제목'}
        readOnly
      />
      <div className={styles.preview_content}>내용</div>
    </section>
  );
}
