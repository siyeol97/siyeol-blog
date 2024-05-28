'use server';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const serverSessionAction = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export default serverSessionAction;
