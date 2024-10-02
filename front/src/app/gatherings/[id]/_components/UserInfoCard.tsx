import Image from "next/image";

interface UserInfoCardProps {
  tempUserData: {
    nickname: string;
    avatar?: string;
    temperature: number;
  };
}

export default function UserInfoCard({ tempUserData }: UserInfoCardProps) {
  const { nickname, avatar, temperature } = tempUserData;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 z-20">
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12">
          <Image
            src={avatar ? avatar : "/api/placeholder/40/40"}
            alt="User avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold text-lg">{nickname}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${temperature}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">온도: {temperature}°</p>
        </div>
      </div>
    </div>
  );
}
