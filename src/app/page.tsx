import AboutSection from '@/components/home/AboutSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import Hero from '@/components/home/Hero';
import JourneySection from '@/components/home/JourneySection';
import SkillsSection from '@/components/home/SkillsSection';

const Home = () => {
  return (
    <main className='min-h-screen pb-20' >
      <Hero />
      <section >
        <div className='w-full' >
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
