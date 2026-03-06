import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projets.data';

const ProjectsSection = () => {
  return (
    <section id="projects" className='min-h-screen py-24 w-full scroll-mt-16' >
      <div className='max-w-6xl mx-auto space-y-16'>
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>My Projects</h1>

        </div>
        <div className='space-y-16'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
