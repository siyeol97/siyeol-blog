import ReplyContent from './ReplyContent';
import WriteReply from './WriteReply';

export default function ReplyArea() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <WriteReply />
      <ReplyContent />
    </div>
  );
}
