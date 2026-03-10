import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projets.data';

const ProjectsPage = () => {
  return (
    <main className='min-h-screen py-24 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto space-y-12'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>All Projects</h1>
          <p className='text-muted-foreground text-lg'>A complete collection of my work</p>
        </div>
        
        <div className='space-y-12 md:space-y-16'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
