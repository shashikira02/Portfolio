import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import BackgroundParticles from '@/components/layout/BackgroundParticles';
import Footer from '@/components/layout/Footer';
import SocialSidebar from '@/components/layout/SocialSidebar';
import Providers from '@/components/theme-provider';
import { PHProvider } from '@/components/posthog-provider';
import { PostHogPageView } from '@/components/posthog-pageview';

export const metadata: Metadata = {
  title: 'Shashi Kiran | Portfolio',
  description: 'Fullstack Developer Portfolio build with Next.js',
  icons: {
    icon: '/logo.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className='relative overflow-x-hidden ' >
          <Providers >
            <PostHogPageView />
            <BackgroundParticles />
            <Navbar />
            <SocialSidebar />
            <main className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto pt-24">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </PHProvider>
    </html>
  );
}

