import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projets.data';
import Link from 'next/link';

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className='min-h-screen pt-24 w-full scroll-mt-16' >
      <div className='max-w-6xl mx-auto space-y-16'>
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>My Projects</h1>

        </div>
        <div className='space-y-16'>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className='flex justify-end pt-4'>
            <Link 
              href='/projects'
              className='px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition'
            >
              More Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
