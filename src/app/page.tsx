import Hero from '@/components/home/Hero';
import ProfileCard from '@/components/home/ProfileCard';
import SkillsSection from '@/components/home/SkillsSection';
import SocialLinks from '@/components/home/SocialLinks';

const Home = () => {
  return (
    <main className='min-h-screen px-4 pb-20' >
      <Hero />

      <ProfileCard name='Shashi Kiran' role='Fullstack Developer' email='shashhikira4124@gmail.com' location='India' gender='Male'  />

      <SocialLinks />

      <SkillsSection
        skills={['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js']}
      />
    </main>
  );
};

export default Home;
