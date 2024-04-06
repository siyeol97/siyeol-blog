export interface NewReply {
  comment: string;
  post_id: string;
}

const writeReply = async (newReply: NewReply) => {
  const response = await fetch('/api/reply/new', {
    method: 'POST',
    body: JSON.stringify(newReply),
  });
  if (!response.ok) {
    throw new Error('댓글 작성 실패');
  }
};

export default writeReply;
