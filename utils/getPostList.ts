import { Post } from '@/app/type';

const getPostList = async (): Promise<Post[] | null> => {
  const startTime = Date.now();
  try {
    const response = await fetch(`${process.env.API_URL}/api/post/pid`);
    const data: Post[] = await response.json();

    console.log(`전체 글목록 fetch 소요 시간: ${Date.now() - startTime}ms`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostList;
