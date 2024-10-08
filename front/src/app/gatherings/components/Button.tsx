interface IButton {
  className?: string;
  style?: "solid" | "outlined" | "default" | "active";
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
}: IButton) {
  const sizeClasses = {
    small: "text-sm",
    large: "text-base",
    responsive: "text-sm md:text-base",
  };

  const solidClasses = `
    bg-orange-600 text-white 
    hover:bg-orange-700 
    active:bg-orange-800 
    disabled:bg-gray-400 disabled:text-white
  `;

  const outlinedClasses = `
    bg-white border border-orange-600 text-orange-600
    hover:border-orange-700 hover:text-orange-700 
    active:border-orange-800 active:text-orange-800 
    disabled:border-gray-400 disabled:text-gray-400
  `;

  const customStyleClasses = {
    default: "bg-gray-200 text-gray-900",
    active: "bg-gray-900 text-white",
  };

  const styleClasses =
    style === "solid"
      ? solidClasses
      : style === "outlined"
        ? outlinedClasses
        : customStyleClasses[style];

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 rounded-xl 
        ${sizeClasses[size]} 
        ${styleClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
