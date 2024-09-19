interface ProjectCardProps {
  projectName: string;
  description: string;
  onParticipate: () => void;
}

function ProjectCard({
  projectName,
  description,
  onParticipate,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col text-2xl font-bold rounded-lg max-w-[382px]">
      <div className="flex flex-col px-8 py-11 w-full bg-white rounded-lg border border-solid shadow-sm border-black border-opacity-10">
        <h2 className="self-start text-zinc-700">{projectName}</h2>
        <hr className="shrink-0 mt-8 h-px border border-solid border-black border-opacity-10" />
        <p className="self-start mt-6 text-base leading-none text-neutral-400">
          {description}
        </p>
        <button
          onClick={onParticipate}
          className="px-16 py-5 mt-14 text-white whitespace-nowrap bg-purple-400 rounded-lg"
        >
          참여하기
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
