export interface WritePostProp {
  post_id: string | undefined;
  title: string;
  content: string;
  type: string;
}

const writePost = async (writePostProp: WritePostProp) => {
  const response = await fetch(`/api/post/${writePostProp.type}`, {
    method: 'POST',
    body: JSON.stringify(writePostProp),
  });
  if (!response.ok) {
    throw new Error('글 작성 실패');
  }
  return await response.json();
};

export default writePost;
