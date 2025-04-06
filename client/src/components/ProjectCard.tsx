import { Project } from "../data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="md:w-[400px] h-[240px] dark:bg-white/10 bg-gray-100 shadow-lg rounded-lg flex flex-col justify-between p-5">
      <div className="flex gap-4 items-center">
        <img src={project.icon} className="w-20 h-20" />
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">{project.title}</span>
          <span className="text-sm">{project.role}</span>
        </div>
      </div>

      <p>{project.shortDescription}</p>

      <div className="flex justify-between">
        <span className="text-xs">{project.dates}</span>
      </div>
    </div>
  );
}
