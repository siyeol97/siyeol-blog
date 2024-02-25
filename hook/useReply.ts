import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useReply = (
  _id: string
): [Reply[], Dispatch<SetStateAction<Reply[]>>] => {
  const [replyData, setReplyData] = useState<Reply[]>([]);
  useEffect(() => {
    const getReplyData = async () => {
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: _id,
      });
      const result: Reply[] = await response.json();
      setReplyData(result);
    };
    getReplyData();
  }, [_id]);
  return [replyData, setReplyData];
};

export default useReply;
