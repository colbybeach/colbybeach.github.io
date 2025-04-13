import { Project } from "../data";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            className="md:w-[49%] w-full h-[240px] dark:bg-white/10 bg-[#e1e1e1] shadow-lg rounded-lg flex flex-col justify-between p-5 cursor-pointer hover:shadow-xl"
            onClick={onClick}
        >
            <div className="flex gap-4 items-center">
                <img src={project.icon} className="w-20 h-20 rounded-md" />
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold">{project.title}</span>
                    <span className="text-sm">{project.role}</span>
                </div>
            </div>

            <p className="text-sm line-clamp-2">{project.description}</p>

            <div className="flex justify-between items-center">
                <span className="text-xs">{project.dates}</span>
                <div className="flex gap-4 items-center">
                    {project.skills.slice(0, 4).map((item) => {
                        {
                            return <>{item}</>;
                        }
                    })}
                    <span>...</span>
                </div>
            </div>
        </div>
    );
}
