import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projets.data';
import React from 'react';

const page = () => {
  return (
    <main className='min-h-screen px-6 py-24 max-w-7xl mx-auto space-y-16' >
      <h1 className='text-4xl font-bold text-center' >My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
};

export default page;
