import styles from '../css/Post.module.css';
import ReplyArea from './ReplyArea';
import { Session } from 'next-auth';
import Content from './Content';
import TitleWrapper from './TitleWrapper';
import { Post } from '@/app/type';
import { QueryClient, dehydrate } from '@tanstack/query-core';
import getReplyList from '@/utils/getReplyList';
import { HydrationBoundary } from '@tanstack/react-query';

interface Props {
  post: Post;
  isAuthor: boolean;
  session: Session | null;
}

export default async function PostDetail({ post, isAuthor, session }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['reply-list'],
    queryFn: () => getReplyList(post._id.toString()),
  });
  return (
    <section className={styles.post}>
      <TitleWrapper
        post={post}
        isAuthor={isAuthor}
      />
      <Content post={post} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReplyArea
          post_id={post._id.toString()}
          session={session}
        />
      </HydrationBoundary>
    </section>
  );
}
