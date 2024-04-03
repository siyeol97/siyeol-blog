import { Metadata } from 'next';
import SignIn from './components/SignIn';

export const metadata: Metadata = {
  title: '로그인',
};

export default async function page() {
  return <SignIn />;
}
