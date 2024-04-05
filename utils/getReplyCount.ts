import { Reply } from '@/app/type';

const getReplyCount = async (_id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/reply/pid`, {
      method: 'POST',
      body: _id,
    });
    const data: Reply[] = await response.json();
    return data.length;
  } catch (error) {
    console.log(error);
  }
};

export default getReplyCount;
