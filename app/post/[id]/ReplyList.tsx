import Reply from './Reply';

export default function ReplyList({
  replyData,
  CurrentUserData,
}: {
  replyData: Reply[];
  CurrentUserData: UserData | null;
}) {
  return (
    <div>
      {replyData.map((item) => {
        return (
          <Reply
            key={item._id}
            item={item}
            CurrentUserData={CurrentUserData}
          />
        );
      })}
    </div>
  );
}
