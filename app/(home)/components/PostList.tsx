import { memo } from 'react';
import styles from '../css/PostList.module.css';
import Card from './Card';
import { Post } from '@/app/type';

interface Props {
  searchedData: Post[];
}

const PostList = memo(({ searchedData }: Props) => {
  return (
    <ul className={styles.ul}>
      {searchedData?.map((post) => (
        <Card
          key={post._id.toString()}
          post={post}
        />
      ))}
    </ul>
  );
});

PostList.displayName = 'PostList';

export default PostList;
