import MarkdownView from '@/components/Markdown/MarkdownView';
import styles from '../css/Content.module.css';
import { Post } from '@/app/type';

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
