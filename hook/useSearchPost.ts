import { Post } from '@/app/type';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const useSearchPost = (data: Post[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState<Post[]>([]);
  const [searchedTagData, setSearchedTagData] = useState<string>('');

  useEffect(() => {
    if (searchedTagData === '' && searchValue === '') {
      // 태그가 선택되지 않았을 시 전체 데이터를 보여줌
      if (data.length === 0) {
        // 데이터가 없을 때 무한 루프 방지
        return;
      }
      setSearchedData(data);
      return;
    }

    const timer = setTimeout(() => {
      let filteredPosts = data;

      if (searchValue !== '') {
        filteredPosts = filteredPosts.filter((post) =>
          post.title
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(searchValue.replace(/\s/g, '').toLowerCase())
        );
      }

      if (searchedTagData !== '') {
        filteredPosts = filteredPosts.filter((post) => {
          if (!post.tags) {
            return false;
          }
          return post.tags.some((item) => item.tag === searchedTagData);
        });
      }

      setSearchedData(filteredPosts);
    }, 300);

    return () => clearTimeout(timer); // 타이머 해제
  }, [searchValue, searchedTagData, data]);

  const onSearchValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
    },
    [searchValue]
  );

  const onTagValueChange = useCallback(
    // searchedTagData가 변경될 때만 호출
    (tag: string) => {
      if (tag === searchedTagData) {
        setSearchedTagData('');
        return;
      }
      setSearchedTagData(tag);
    },
    [searchedTagData]
  );

  return {
    searchValue,
    searchedData,
    onSearchValueChange,
    searchedTagData,
    onTagValueChange,
  };
};

export default useSearchPost;
