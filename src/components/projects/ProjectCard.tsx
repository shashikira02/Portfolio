'use client';

import { Project } from '@/lib/projets.data';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';
import { memo, useCallback } from 'react';

type Props = {
  project: Project;
};

const ProjectCard = memo(({ project }: Props) => {
  const posthog = usePostHog();

  const handleDemoClick = useCallback(() => {
    posthog?.capture('project_demo_clicked', {
      project_name: project.name,
      project_url: project.demoUrl,
      technologies: project.technologies,
    });
  }, [posthog, project.name, project.demoUrl, project.technologies]);

  const handleGithubClick = useCallback(() => {
    posthog?.capture('project_github_clicked', {
      project_name: project.name,
      github_url: project.githubUrl,
      technologies: project.technologies,
    });
  }, [posthog, project.name, project.githubUrl, project.technologies]);

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-md hover:border-border/80 transition-colors">
      {/* Left side - Image */}
      {project.image && (
        <div className="flex-1 order-2 md:order-1">
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
          />
        </div>
      )}

      {/* Right side - Content */}
      <div className="flex-1 space-y-4 order-1 md:order-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{project.name}</h2>
          {project.date && <p className="text-sm text-muted-foreground mt-1">{project.date}</p>}
        </div>
        <ul className="space-y-3 text-muted-foreground">
          {project.description.map((point, index) => (
            <li key={index} className="flex items-start gap-3 leading-relaxed">
              <span className="text-foreground mt-1.5 text-xs">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-card/50 border border-border rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          {project.demoUrl && (
            <Link 
              target="_blank" 
              href={project.demoUrl}
              onClick={handleDemoClick}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition text-sm flex items-center gap-2"
            >
              <ExternalLink size={16} />
              View Demo
            </Link>
          )}
          <Link 
            target="_blank" 
            href={project.githubUrl}
            onClick={handleGithubClick}
            className="px-4 py-2 border border-border rounded-lg font-medium hover:bg-accent transition text-sm flex items-center gap-2"
          >
            <Github size={16} />
            Github Repo
          </Link>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
