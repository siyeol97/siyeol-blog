export default function WritePage() {
  return (
    <div>
      <form
        action='/api/post/new'
        method='POST'
      >
        <input
          type='text'
          name='title'
          placeholder='제목을 작성해주세요'
        />
        <textarea
          name='content'
          placeholder='내용을 작성해주세요'
        />
        <button type='submit'>저장하기</button>
      </form>
    </div>
  );
}
