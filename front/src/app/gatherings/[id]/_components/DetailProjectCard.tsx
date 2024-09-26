interface DetailProjectCard {
  projectName: string;
  description: string;
  onParticipate: () => void;
}

function DetailProjectCard({
  projectName,
  description,
  onParticipate,
}: DetailProjectCard) {
  return (
    <aside className="flex flex-col text-2xl font-bold rounded-lg w-[382px] h-[278px]">
      <div className="flex flex-col px-[27px] py-[36px] w-full h-full bg-white rounded-lg border border-solid shadow-lg border-black border-opacity-10">
        <h2 className="self-start font-bold text-zinc-700 ">{projectName}</h2>
        <hr className="shrink-0 my-[31px] h-px border border-solid border-black border-opacity-10" />
        <p className="self-start text-base leading-tight text-neutral-400 overflow-hidden font-normal">
          {description}
        </p>
        <button
          onClick={onParticipate}
          className="flex items-center justify-center px-16 py-3 mt-[31px] text-white whitespace-nowrap bg-purple-400 rounded-lg"
        >
          참여하기
        </button>
      </div>
    </aside>
  );
}

export default DetailProjectCard;
