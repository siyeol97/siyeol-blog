import { TagField } from '@/app/type';
import Tag from '@/components/Tag';
import styles from '../css/TagList.module.css';

interface Props {
  tags: TagField[];
}

export default function TagList({ tags }: Props) {
  return (
    <section className={styles.wrapper}>
      {tags.map((item) => {
        if (item.posts.length === 0) {
          return null;
        }
        return (
          <Tag
            key={item._id?.toString()}
            tag={item.tag}
            color={item.color}
            postCount={item.posts.length}
          />
        );
      })}
    </section>
  );
}
