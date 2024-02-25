const useReply = async (_id: string) => {
  try {
    const response = await fetch('/api/reply/pid', {
      method: 'POST',
      body: _id,
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default useReply;
