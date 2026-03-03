import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import BackgroundParticles from '@/components/layout/BackgroundParticles';
import Footer from '@/components/layout/Footer';

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
    <html lang="en" className="dark">
      <body className='relative overflow-x-hidden '>
        <BackgroundParticles />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
