import { Skill } from "../data";

interface lanSkillProps {
  item: Skill;
}

export default function SkillRow({ item }: lanSkillProps) {
  return (
    <div className="flex gap-2 items-center">
      {item.image}
      <span className="text-sm">{item.skill}</span>
    </div>
  );
}
