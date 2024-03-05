import MarkdownView from '@/components/MarkdownView';
import styles from '../css/Content.module.css';

interface Props {
  post: Post;
}

export default function Content({ post }: Props) {
  return (
    <div className={styles.wrapper}>
      <MarkdownView content={post.content} />
    </div>
  );
}
