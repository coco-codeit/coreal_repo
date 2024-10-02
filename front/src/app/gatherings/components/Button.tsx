interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "neutral";
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  rounded = "xl",
  size = "medium",
  onClick,
  children,
}: ButtonProps) {
  // 버튼 색상 및 스타일 임의 설정
  const variantClasses = {
    primary: "bg-purple-3 text-white hover:bg-purple-5",
    secondary: "bg-gray-200 text-purple-6 hover:bg-purple-1",
    tertiary: "bg-purple-2 text-purple-5 hover:bg-purple-3",
    neutral: "bg-white text-black hover:bg-purple-2",
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const sizeClasses = {
    small: "py-1.5 px-3 text-sm",
    medium: "py-2.5 px-4 text-body-1",
    large: "py-3.5 px-6 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${roundedClasses[rounded]} ${sizeClasses[size]}
        sm:py-3 sm:px-6 sm:text-body-2
        ${variantClasses[variant]} `}
    >
      {children}
    </button>
  );
}

export default Button;
