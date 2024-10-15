interface IButton {
  className?: string;
  style?:
    | "solid"
    | "outlined"
    | "default"
    | "active"
    | "calendarOutlined"
    | "calendarSolid";
  type?: "submit" | "button" | "reset";
  size: "small" | "large" | "responsive";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({
  size = "large",
  disabled = false,
  onClick = () => {},
  children,
  className,
  style = "solid",
  type = "button",
}: IButton) {
  const sizeClasses = {
    small: "text-sm",
    large: "text-base",
    responsive: "text-sm md:text-base",
  };

  const solidClasses = `
    bg-purple-2 text-white
    hover:bg-purple-3 text-white
    disabled:bg-gray-400 disabled:text-white
  `;

  const outlinedClasses = `
    bg-white border border-purple-2 text-purple-2
    hover:border-purple-3 hover:text-purple-3 
    disabled:border-gray-400 disabled:text-gray-400
  `;

  const calendarOutlinedClasses = `
    bg-white text-gray-900 border border-gray-900
    hover:border-gray-700 hover:text-gray-700
    disabled:bg-white disabled:text-gray-400 disabled:border-gray-400
  `;

  const calendarSolidClasses = `
    bg-gray-900 text-green-2
    hover:bg-gray-800 hover:text-green-1
    disabled:bg-gray-400 disabled:text-white
  `;

  const customStyleClasses = {
    default: "bg-gray-200 text-gray-900",
    active: "bg-gray-900 text-white",
    calendarOutlined: calendarOutlinedClasses,
    calendarSolid: calendarSolidClasses,
  };

  const styleClasses =
    style === "solid"
      ? solidClasses
      : style === "outlined"
        ? outlinedClasses
        : customStyleClasses[style];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center space-x-2 rounded-xl active:outline-none
        ${sizeClasses[size]} 
        ${styleClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
