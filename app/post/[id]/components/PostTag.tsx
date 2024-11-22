import Tag from '@/components/Tag';
import styles from '../css/PostTag.module.css';

interface Props {
  tags: string[];
}

export default function PostTag({ tags }: Props) {
  return (
    <div className={styles.wrapper}>
      {tags.map((tag) => (
        <Tag
          tag={tag}
          key={tag}
        />
      ))}
    </div>
  );
}
