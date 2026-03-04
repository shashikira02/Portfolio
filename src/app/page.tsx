import AboutSection from '@/components/home/AboutSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import Hero from '@/components/home/Hero';
import JourneySection from '@/components/home/JourneySection';
import ProfileCard from '@/components/home/ProfileCard';
import SkillsSection from '@/components/home/SkillsSection';
import SocialLinks from '@/components/home/SocialLinks';

const Home = () => {
  return (
    <main className='min-h-screen px-4 pb-20' >
      <Hero />
      <AboutSection/>
      <JourneySection/>


      <SkillsSection
        skills={['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js']}
      />
      <CertificationsSection/>
    </main>
  );
};

export default Home;
