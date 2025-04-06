interface Props {
  onClick?: () => void;
  title: string;
  selected: boolean;
}
export default function SkillCategoryButton({
  title,
  onClick,
  selected,
}: Props) {
  return (
    <div
      className={`cursor-pointer p-2 flex items-center ${selected && "dark:bg-white/10 bg-gray-200 shadow-md  rounded-md"}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
