import { Post } from '@/app/type';
import { ChangeEvent, useState } from 'react';

const useSearchPost = (data: Post[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState<Post[]>(data);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const filteredPosts = data.filter((post) =>
      post.title
        .replace(/\s/g, '')
        .toLowerCase()
        .includes(e.target.value.replace(/\s/g, '').toLowerCase())
    );
    setSearchedData(filteredPosts);
  };

  return { searchValue, searchedData, onChange };
};

export default useSearchPost;
