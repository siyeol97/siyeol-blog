export interface LikePost {
  user_email: string;
  post_id: string;
}

const likePost = async (like_req: LikePost) => {
  const response = await fetch(`/api/post/like`, {
    method: 'POST',
    body: JSON.stringify(like_req),
  });
  if (!response.ok) {
    throw new Error('댓글 좋아요 실패');
  }
};
export default likePost;
