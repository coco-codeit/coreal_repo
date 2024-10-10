"use client";
// import { getUserProfile } from "@/apis/profile";
import ManageTab from "./components/manage/ManageTab";
import UserInfo from "./components/userinfo/UserInfo";
// import { UserProfileInterface } from "@/types/common";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserProfile } from "@/hooks/queries/mypage";
import LoadingSpinner from "../components/LoadingSpinner";
import useUserInfo from "@/stores/useUserInfo";

export default function MyPage() {
  const router = useRouter();
  const { status } = useSession();
  const { setId, setName, setEmail, setImage, setCompanyName } = useUserInfo();
  const { data, isLoading } = useUserProfile();

  useEffect(() => {
    if (data) {
      setId(data.id);
      setName(data.name);
      setEmail(data.email);
      setImage(data.image);
      setCompanyName(data.companyName);
    }
  }, [data, setCompanyName, setEmail, setId, setImage, setName]);

  useEffect(() => {
    console.log(status);
    if (status !== "authenticated" && status !== "loading")
      return router.push("/signin");
  }, [router, status]);

  return (
    <>
      <h1 className="text-lg md:text-2xl font-semibold mb-3 md:mb-5">
        마이 페이지
      </h1>
      {isLoading ? (
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
