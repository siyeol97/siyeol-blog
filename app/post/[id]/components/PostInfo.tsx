import ControlPost from './ControlPost';

interface Props {
  post: Post;
  isAuthor: boolean;
}

export default function PostInfo({ post, isAuthor }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <span>siyeol</span>
      <div>{isAuthor ? <ControlPost _id={post._id} /> : null}</div>
    </div>
  );
}
