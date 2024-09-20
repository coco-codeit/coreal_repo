"use client";

import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  rounded = "xl",
  onClick,
  children,
}: ButtonProps) {
  // 버튼 색상 및 스타일 임의 설정
  const variantClasses = {
    primary: "bg-purple-4 text-white hover:bg-purple-7",
    secondary: "bg-white text-purple-6 hover:bg-purple-1",
    tertiary: "bg-purple-2 text-purple-5 hover:bg-purple-3",
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`${roundedClasses[rounded]}
        py-2.5 px-4 text-subhead-2     
        sm:text-subhead-3  
        ${variantClasses[variant]} `}
    >
      {children}
    </button>
  );
}

export default Button;
