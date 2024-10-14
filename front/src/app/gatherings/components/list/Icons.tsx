import { motion } from "framer-motion";

function DallaemfitIcon({ isSelected }: { isSelected: boolean }) {
  const fillColor = isSelected ? "#111827" : "#9CA3AF"; // gray-900 or gray-400
  const strokeColor = isSelected ? "#111827" : "#9CA3AF"; // gray-900 or gray-400

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5938 11.5C18.5938 12.4961 18.1083 13.3789 17.3611 13.9245L18.4413 14.1692C18.6672 14.2203 18.8571 14.3724 18.9564 14.5817L20.7839 18.4338C20.7957 18.4588 20.8064 18.484 20.8161 18.5094L23.8232 20.3681C24.293 20.6585 24.4384 21.2747 24.148 21.7445C23.8577 22.2143 23.2414 22.3597 22.7716 22.0694L19.3364 19.9461C19.2444 19.8892 19.1648 19.8198 19.0985 19.7414C18.9665 19.6401 18.8578 19.5042 18.7878 19.3394L18.5938 18.8828V20.8594C20.4052 21.7494 23.2484 23.6685 22.4582 25.4489C21.6134 27.3525 17.5299 26.2421 15.5938 25.4489C13.6577 26.2421 9.57429 27.3525 8.72944 25.4489C7.9393 23.6685 10.7825 21.7494 12.5938 20.8594V19.3227L12.5098 19.5206C12.4398 19.6855 12.3311 19.8213 12.1991 19.9226C12.1328 20.001 12.0532 20.0704 11.9611 20.1273L8.52591 22.2506C8.05612 22.5409 7.43989 22.3955 7.14951 21.9257C6.85914 21.4559 7.00458 20.8397 7.47437 20.5493L10.4815 18.6906C10.4911 18.6652 10.5018 18.64 10.5137 18.615L12.3412 14.7629C12.4404 14.5536 12.6303 14.4015 12.8562 14.3504L13.9813 14.0956C14.0048 14.088 14.0284 14.0809 14.0523 14.0742C13.1786 13.5498 12.5938 12.5932 12.5938 11.5C12.5938 9.84315 13.937 8.5 15.5938 8.5C17.2507 8.5 18.5938 9.84315 18.5938 11.5Z"
        fill={fillColor}
      />
      <path
        d="M9.59375 12.9243L11.5482 12.5"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M9.61328 9.42621L11.5241 10.0168"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M11.5938 6.5L12.8545 7.78858"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M21.2881 12.5L19.3336 12.0757"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M21.5752 9.42621L19.6644 10.0168"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M19.5947 6.5L18.334 7.78858"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5938 7L15.5937 5"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WorkationIcon({ isSelected }: { isSelected: boolean }) {
  const fillColor = isSelected ? "#111827" : "#9CA3AF"; // gray-900 or gray-400
  const strokeColor = isSelected ? "#111827" : "#9CA3AF"; // gray-900 or gray-400

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 28C26 25.2386 21.299 22.5 15.5 22.5C9.70101 22.5 5 25.2386 5 28H26Z"
        fill={fillColor}
      />
      <rect
        x="11.0586"
        y="14.8928"
        width="1"
        height="9.52579"
        rx="0.5"
        transform="rotate(-16.685 11.0586 14.8928)"
        fill={fillColor}
      />
      <rect
        x="9"
        y="9.28711"
        width="1"
        height="1.49575"
        rx="0.5"
        transform="rotate(-16.685 9 9.28711)"
        fill={fillColor}
      />
      <path
        d="M9.99993 10C5.71814 11.1418 4.57682 15.4072 4.57715 18.7256C4.57727 19.928 5.94396 20.1119 6.48172 19.0364C6.77906 18.4417 7.46842 18.1562 8.09916 18.3664L8.6629 18.5543C9.46624 18.8221 10.3513 18.5607 10.8803 17.8995L11.0813 17.6483C11.6332 16.9584 12.5568 16.6856 13.395 16.965L13.7161 17.0721C14.4662 17.3221 15.2894 17.0176 15.6962 16.3396L15.8126 16.1455C16.2005 15.4991 17.0205 15.2603 17.6947 15.5974C18.797 16.1486 19.8545 15.2013 19.1791 14.1705C17.4694 11.5608 14.288 8.85654 9.99993 10Z"
        fill={fillColor}
      />
      <circle cx="24.5" cy="8" r="3.5" fill={fillColor} />
      <path d="M19.75 8L18.75 8" stroke={strokeColor} strokeLinecap="round" />
      <path d="M30 8L29 8" stroke={strokeColor} strokeLinecap="round" />
      <path
        d="M21.1046 11.2704L20.3975 11.9775"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M28.3526 4.02251L27.6455 4.72961"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M21.1046 4.72963L20.3975 4.02252"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M28.3526 11.9775L27.6455 11.2704"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M24.375 12.625L24.375 13.625"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M24.375 2.375L24.375 3.375"
        stroke={strokeColor}
        strokeLinecap="round"
      />
    </svg>
  );
}

interface IconProps {
  inverse?: boolean;
}

function DownIcon({ inverse = false }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7151 15.4653C12.3975 15.7654 11.9008 15.7654 11.5832 15.4653L5.8047 10.006C5.26275 9.49404 5.6251 8.58286 6.37066 8.58286L17.9276 8.58286C18.6732 8.58286 19.0355 9.49404 18.4936 10.006L12.7151 15.4653Z"
        fill={inverse ? "#F9FAFB" : "#1F2937"}
      />
    </svg>
  );
}

interface DeleteIconProps {
  color?: string;
}

function DeleteIcon({ color = "#111827" }: DeleteIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L19.5 19.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19.5 5L5 19.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface HeartIconProps {
  liked: boolean;
}

function HeartIcon({ liked }: HeartIconProps) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        scale: liked ? [1, 0.8, 1.2, 1] : [1, 1.2, 0.8, 1],
        fill: liked ? "#EA580C" : "#E5E7EB",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      className="cursor-pointer"
    >
      <path
        d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z"
        fill={liked ? "#EA580C" : "#E5E7EB"}
      />
    </motion.svg>
  );
}

export { DallaemfitIcon, WorkationIcon, DownIcon, DeleteIcon, HeartIcon };
