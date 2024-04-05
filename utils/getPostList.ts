const getPostList = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/post/pid`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPostList;
