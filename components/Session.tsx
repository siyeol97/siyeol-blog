import getUserData from '@/utils/getUserData';
import SignInUpButton from './SignInUpButton';
import UserInfo from './UserInfo';

export default async function Session() {
  const userData = await getUserData();
  return (
    <div>
      {userData ? <UserInfo userData={userData} /> : <SignInUpButton />}
    </div>
  );
}
