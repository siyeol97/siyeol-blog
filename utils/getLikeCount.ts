const getPostLikeCount = async (post_id: string) => {
  try {
    const response = await fetch(`/api/post/like-count`, {
      method: 'POST',
      body: post_id,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPostLikeCount;
