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
};
export default NextAuth(authOptions);
