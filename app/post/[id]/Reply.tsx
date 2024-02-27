export default function Reply({
  item,
  CurrentUserData,
}: {
  item: Reply;
  CurrentUserData: UserData | null;
}) {
  const isAuthor = item.author === CurrentUserData?.email;
  return (
    <div style={{ display: 'flex' }}>
      <p>{item.comment}</p>
      {isAuthor ? (
        <>
          <button>수정</button>
          <button>삭제</button>
        </>
      ) : null}
    </div>
  );
}
