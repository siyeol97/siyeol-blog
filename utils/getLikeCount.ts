export interface GetLikeInfoProp {
  user_email: string | null | undefined;
  post_id: string;
}

const getPostLikeCount = async (getLikeInfoProp: GetLikeInfoProp) => {
  try {
    const response = await fetch(`/api/post/like-count-check`, {
      method: 'POST',
      body: JSON.stringify(getLikeInfoProp),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPostLikeCount;
