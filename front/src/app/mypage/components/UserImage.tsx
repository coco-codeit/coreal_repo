export default function UserImage({
  src,
  name,
  className,
}: {
  src?: string;
  name?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 rounded-full w-14 h-14 box-content  ${className ? className : ""}`}
    >
      <img
        src={src !== "string" && src ? src : "/images/default_user_image.svg"}
        width="100"
        height="100"
        alt={`${name}님의 프로필 이미지`}
        className="box-border w-14 h-14 rounded-full border-2 border-gray-200"
      />
    </div>
  );
}
