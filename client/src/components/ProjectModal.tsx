import { useEffect } from "react";
import { projects } from "../data";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  currentProject: number;
};

export default function ProjectModal({
  isOpen,
  onClose,
  currentProject,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount too
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const project = projects[currentProject];

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[500px] dark:bg-gray-700 bg-gray-200 rounded-lg flex flex-col gap-y-6 justify-between p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4 items-center">
          <img src={project.icon} className="w-20 h-20 rounded-md" />
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">{project.title}</span>
            <span className="text-sm">{project.role}</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {project.skills.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <p className="text-sm">{project.description}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-xs">{project.dates}</span>
          <span className="text-xs cursor-pointer p-1" onClick={onClose}>
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
