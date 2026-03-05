import AboutContent from '@/components/about/AboutContent';
import AboutSidebar from '@/components/about/AboutSidebar';

const AboutPage = () => {
  return (
    <main className='min-h-screen py-24 w-full px-6'>
      <div className='grid md:grid-cols-3 gap-16'>
        <div className='md:col-span-1' >
          <AboutSidebar />
        </div>
      <div className="md:col-span-2">
        <AboutContent />
      </div>
      </div>
    </main>
  );
};

export default AboutPage;
