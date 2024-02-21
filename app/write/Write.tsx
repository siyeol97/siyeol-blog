import styles from './Write.module.css';

export default function Write() {
  return (
    <section className={styles.section}>
      <form
        action='/api/post/new'
        method='POST'
        className={styles.write_content}
      >
        <input
          type='text'
          name='title'
          placeholder='제목을 작성해주세요'
        />
        <textarea
          name='content'
          placeholder='내용을 작성해주세요'
        />
        <button type='submit'>저장하기</button>
      </form>
    </section>
  );
}
