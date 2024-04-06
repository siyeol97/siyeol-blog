const likePost = async (user_email: string) => {
  const response = await fetch(`/api/post/like`, {
    method: 'POST',
    body: user_email,
  });
  if (!response.ok) {
    throw new Error('댓글 좋아요 실패');
  }
};
export default likePost;
