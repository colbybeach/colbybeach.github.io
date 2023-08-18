import { Skill } from "../api";

interface SkillLevelProps {
  data: Skill[];
  level: string;
}


export default function SkillLevel({ data, level }: SkillLevelProps) {
  return (
    <>
      <h3 className='text-xl uppercase'>{level}</h3>
      <div className='flex gap-5 w-full justify-center'>
        {data.map((skill: Skill, index: number) => (
          skill.level == level &&
          <div className="tooltip" data-tip={skill.skill} key={index}>
            <img key={index} src={skill.image} alt={`Skill ${index}`} className='w-10 h-10 ' />
          </div>
        ))}
      </div>
    </>
  );
}
