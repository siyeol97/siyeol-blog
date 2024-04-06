export interface LikePost {
  user_id: string;
  post_id: string;
}

const unlikePost = async (like_id: LikePost) => {
  const response = await fetch(`/api/reply/unlike`, {
    method: 'DELETE',
    body: JSON.stringify(like_id),
  });
  if (!response.ok) {
    throw new Error('댓글 좋아요 취소 실패');
  }
};
export default unlikePost;
