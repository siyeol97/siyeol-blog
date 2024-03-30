import { Metadata } from 'next';
import Register from './Register';

export const metadata: Metadata = {
  title: '회원가입',
};

export default function RegisterPage() {
  return <Register />;
}
