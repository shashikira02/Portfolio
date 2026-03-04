import AboutSection from '@/components/home/AboutSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import Hero from '@/components/home/Hero';
import JourneySection from '@/components/home/JourneySection';
import SkillsSection from '@/components/home/SkillsSection';

const Home = () => {
  return (
    <main className='min-h-screen px-4 pb-20' >
      <Hero />
      <section className='py-14 px-6' >
        <div className='max-w-5xl mx-auto' >
          <AboutSection />
          <SkillsSection
            skills={['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js']}
          />
          <CertificationsSection />
          <JourneySection />
        </div>
      </section>
    </main>
  );
};

export default Home;
