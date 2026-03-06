import ContactSection from '@/components/contact/ContactSection';
import AboutSection from '@/components/home/AboutSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import Hero from '@/components/home/Hero';
import SkillsSection from '@/components/home/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectSection';

const Home = () => {
  return (
    <main className='min-h-screen pb-20' >
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      {/* <JourneySection /> */}
      <ContactSection />
    </main>
  );
};

export default Home;
