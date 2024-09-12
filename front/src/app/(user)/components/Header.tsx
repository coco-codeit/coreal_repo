import Link from "next/link";

export default function Header({
  user,
}: {
  user: { id: string; nickname: string };
}) {
  const menus = [
    { title: "참여 모임", path: "#" },
    { title: "작성한 글", path: "./posts" },
    { title: "작성한 리뷰", path: "./reviews" },
    { title: "기본 정보 수정", path: "./edit" },
  ];
  return (
    <div className="bg-purple-900">
      <div className="flex flex-row justify-between items-center px-6 container mx-auto h-[60px]">
        <p>{user.nickname}님의 Profile</p>
        <div>
          <ul className="flex flex-row gap-4">
            {menus.map((menu, index) => (
              <Link
                href={`/profile/${user.id}/${menu.path}`}
                key={`${menu}-${index}`}
              >
                <li>{menu.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
