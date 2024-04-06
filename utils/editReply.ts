export interface EditedReply {
  reply_id: string;
  comment: string;
}

const editReply = async (changeReply: EditedReply) => {
  const response = await fetch(`/api/reply/edit`, {
    method: 'POST',
    body: JSON.stringify(changeReply),
  });
  if (!response.ok) {
    throw new Error('댓글 수정 실패');
  }
};
export default editReply;
