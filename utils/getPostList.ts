import { Post } from '@/app/type';

const getPostList = async (): Promise<Post[] | null> => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/post/pid`, {
      cache: 'no-cache',
    });
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostList;
