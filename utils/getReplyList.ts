import { Reply } from '@/app/type';

const getReplyList = async (_id: string) => {
  const response = await fetch('/api/reply/pid', {
    method: 'POST',
    body: _id,
  });
  if (!response.ok) {
    throw new Error('댓글 불러오기 실패');
  }
  const data: Reply[] = await response.json();
  const result = data.reverse();
  return result;
};

export default getReplyList;
