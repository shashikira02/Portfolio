import { Project } from '@/lib/projets.data';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center border border-white/5 rounded-2xl p-8 bg-white/5 backdrop-blur-md">
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
        <h2 className="text-2xl font-semibold">{project.name}</h2>
        <p className="text-sm">{project.date}</p>
        <ul className="list-disc list-inside space-y-1 text-neutral-300 ">
          {project.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className=" flex flex-wrap gap-3 mt-4 ">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/5 border border-white/5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mt-6">
          <Link target="_blank" href={project.demoUrl}>
            View Demo
          </Link>
          <Link target="_blank" href={project.githubUrl}>
            Github Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
