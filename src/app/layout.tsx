import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Shashi Kiran | Portfolio',
  description: 'Fullstack Developer Portfolio build with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className='pt-24'>{children}</main>
      </body>
    </html>
  );
}
