import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projets.data';

const page = () => {
  return (
    <main className='min-h-screen py-24 w-full px-6 space-y-16' >
      <h1 className='text-4xl font-bold text-center' >My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
};

export default page;
