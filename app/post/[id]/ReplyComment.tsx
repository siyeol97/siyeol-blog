export default function ReplyComment({ replyData }: { replyData: Reply[] }) {
  return (
    <div>
      {replyData.map((item) => {
        console.log(item);
        return <p key={item._id}>{item.comment}</p>;
      })}
    </div>
  );
}
