"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useUserProfile } from "@/hooks/queries/mypage";
import useUserInfo from "@/stores/useUserInfo";
import UserInfo from "./components/userinfo/UserInfo";
import ManageTab from "./components/manage/ManageTab";
import LoadingSpinner from "../components/LoadingSpinner";

export default function MyPage() {
  const router = useRouter();
  const session = useSession();
  const { setId, setName, setEmail, setImage, setCompanyName } = useUserInfo();
  const { data, isLoading } = useUserProfile();

  useEffect(() => {
    if (session.status === "unauthenticated") return router.push("/signin");
    if (data && session.status === "authenticated") {
      setId(data.id);
      setName(data.name);
      setEmail(data.email);
      setImage(data.image);
      setCompanyName(data.companyName);
    }
  }, [
    data,
    router,
    setCompanyName,
    setEmail,
    setId,
    setImage,
    setName,
    session,
  ]);

  return (
    <>
      <h1 className="text-lg md:text-2xl font-semibold mb-3 md:mb-5">
        마이 페이지
      </h1>
      {isLoading && session.status === "authenticated" ? (
        <LoadingSpinner />
      ) : (
        <>
          <UserInfo className="mb-3 lg:mb-5" />
          <ManageTab className="" />
        </>
      )}
    </>
  );
}
