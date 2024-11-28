import { Post } from '@/app/type';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const useSearchPost = (data: Post[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState<Post[]>([]);
  const [searchedTagData, setSearchedTagData] = useState<string>('');

  useEffect(() => {
    if (searchedTagData === '') {
      // 검색어가 없을 때 전체 데이터를 보여줌
      setSearchedData(data);
      return;
    }

    const timer = setTimeout(() => {
      // 검색어가 있을 때 태그로 검색
      const filteredPosts = data.filter((post) => {
        if (!post.tags) {
          return false;
        }
        const searchedPost = post.tags.some(
          (item) => item.tag === searchedTagData
        );

        return searchedPost;
      });

      setSearchedData(filteredPosts);
    }, 400);

    return () => clearTimeout(timer); // 타이머 해제
  }, [searchedTagData]);

  useEffect(() => {
    if (data.length > 0) {
      setSearchedData(data);
    }
  }, [data]);

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

  const onSearchValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
    },
    [searchValue]
  );

  // const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setSearchValue(value);
  // };

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
