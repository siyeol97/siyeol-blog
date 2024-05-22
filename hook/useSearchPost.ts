import { Post } from '@/app/type';
import { ChangeEvent, useEffect, useState } from 'react';

const useSearchPost = (data: Post[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState<Post[]>(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredPosts = data.filter((post) =>
        post.title
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(searchValue.replace(/\s/g, '').toLowerCase())
      );
      setSearchedData(filteredPosts);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue, data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return { searchValue, searchedData, onChange };
};

export default useSearchPost;
