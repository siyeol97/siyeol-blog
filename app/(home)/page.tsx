import { Metadata } from 'next';
import Main from './components/Main';
import getPostList from '@/utils/getPostList';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const data = await getPostList();

  if (!data) {
    throw new Error('에러가 발생했습니다.');
  }

  return <Main data={data} />;
}
