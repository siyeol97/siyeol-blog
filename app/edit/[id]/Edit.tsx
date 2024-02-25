import getSinglePost from '@/utils/getSinglePost';
import styles from './Edit.module.css';

export default async function Edit({ _id }: { _id: string }) {
  const result = await getSinglePost(_id);
  return (
    <section className={styles.section}>
      <form
        action='/api/post/edit'
        method='POST'
        className={styles.edit_content}
      >
        <input
          type='text'
          name='title'
          defaultValue={result!.title}
        />
        <textarea
          name='content'
          defaultValue={result!.content}
        />
        <input
          type='text'
          name='_id'
          defaultValue={result!._id.toString()}
          className={styles.hide_id}
        />
        <button type='submit'>저장하기</button>
      </form>
    </section>
  );
}
