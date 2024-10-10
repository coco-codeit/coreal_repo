interface ITimeButton {
  time: string;
  state: "inactive" | "active" | "default"; // 상태를 하나로 관리
  onClick: () => void;
}

function TimeButton({ time, state, onClick }: ITimeButton) {
  const baseClass =
    "px-3 py-2 rounded-md w-[60px] h-[32px] text-sm flex justify-center items-center";

  const stateClass = {
    inactive: "bg-gray-200 text-gray-400 cursor-not-allowed",
    active: "bg-gray-900 text-white",
    default: "text-gray-900 bg-gray-50 border border-gray-200",
  };

  const isDisabled = state === "inactive";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${stateClass[state]}`}
      disabled={isDisabled}
    >
      {time}
    </button>
  );
}

export default TimeButton;
