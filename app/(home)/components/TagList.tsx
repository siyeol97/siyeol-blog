import { TagField } from '@/app/type';
import Tag from '@/components/Tag';
import styles from '../css/TagList.module.css';
import { memo } from 'react';

interface Props {
  tags: TagField[];
  searchedTagData: string;
  onClick: (tag: string) => void;
}

function TagList({ tags, searchedTagData, onClick }: Props) {
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
            onClick={() => onClick(item.tag)}
            selected={(() => {
              if (searchedTagData === '') {
                return true;
              } else {
                return searchedTagData === item.tag;
              }
            })()}
          />
        );
      })}
    </section>
  );
}

export default memo(TagList);
