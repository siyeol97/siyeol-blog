import { connectDB } from '@/utils/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_SECRET_ID!,
      clientSecret: process.env.GITHUB_SECRET_KEY!,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET_KEY,
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
