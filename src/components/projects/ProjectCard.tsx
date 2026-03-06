import { Project } from '@/lib/projets.data';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center border border-white/5 rounded-2xl p-8 bg-white/5 backdrop-blur-md hover:border-white/10 transition-colors">
      {/* Left side - Image */}
      <div className="flex-1 order-2 md:order-1">
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex-1 space-y-4 order-1 md:order-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{project.name}</h2>
          <p className="text-sm text-neutral-400 mt-1">{project.date}</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          {project.description.map((point, index) => (
            <li key={index} className="leading-relaxed">{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-white/10 border border-white/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <Link 
            target="_blank" 
            href={project.demoUrl}
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition text-sm"
          >
            View Demo
          </Link>
          <Link 
            target="_blank" 
            href={project.githubUrl}
            className="px-4 py-2 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition text-sm"
          >
            Github Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
