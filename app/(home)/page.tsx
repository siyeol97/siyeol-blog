import { Metadata } from 'next';
import Main from './components/Main';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  return <Main />;
}
