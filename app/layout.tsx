import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const AppleSDGothicNeo = localFont({
  src: [
    {
      path: './fonts/AppleSDGothicNeoT.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoUL.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoL.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoR.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoM.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoSB.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoB.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoEB.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeoH.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-apple-gothic',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Siyeol's dev-log",
    default: 'Loading...',
  },
  description: "It's a blog for development study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={AppleSDGothicNeo.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
