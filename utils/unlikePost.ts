import { LikePost } from './likePost';

const unlikePost = async (unlike_req: LikePost) => {
  const response = await fetch(`/api/post/unlike`, {
    method: 'DELETE',
    body: JSON.stringify(unlike_req),
  });
  if (!response.ok) {
    throw new Error('댓글 좋아요 취소 실패');
  }
};
export default unlikePost;
