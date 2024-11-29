import { TagField } from '@/app/type';

const getTagList = async () => {
  const startTime = Date.now();
  try {
    const apiUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.API_URL;
    const response = await fetch(`${apiUrl}/api/tag/tag-list`);
    const data: TagField[] = await response.json();

    console.log(`tag list fetch time: ${Date.now() - startTime}ms`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getTagList;
