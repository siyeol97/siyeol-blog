import { Post } from '@/app/type';

const getPostList = async (): Promise<Post[]> => {
  const startTime = Date.now();
  try {
    const apiUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.API_URL;
    const response = await fetch(`${apiUrl}/api/post/pid`);
    const data: Post[] = await response.json();

    console.log(`post list fetch time: ${Date.now() - startTime}ms`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getPostList;
