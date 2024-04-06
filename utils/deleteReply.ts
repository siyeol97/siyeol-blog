const deleteReply = async (_id: string) => {
  const response = await fetch(`/api/reply/delete`, {
    method: 'DELETE',
    body: _id,
  });
  if (!response.ok) {
    throw new Error('댓글 삭제 실패');
  }
};
export default deleteReply;
