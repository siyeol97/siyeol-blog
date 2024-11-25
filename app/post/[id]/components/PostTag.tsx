import Tag from '@/components/Tag';
import styles from '../css/PostTag.module.css';
import { TagType } from '@/app/type';

interface Props {
  tags: TagType[];
}

export default function PostTag({ tags }: Props) {
  return (
    <div className={styles.wrapper}>
      {tags.map((item) => (
        <Tag
          tag={item.tag}
          color={item.color}
          key={item.tag}
        />
      ))}
    </div>
  );
}
