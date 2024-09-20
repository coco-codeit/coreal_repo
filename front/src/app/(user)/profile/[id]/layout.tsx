import { ReactNode } from "react";
import Header from "../../components/Header";

export default function layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <Header user={{ id: params.id, nickname: "테스트" }} />
      {children}
    </div>
  );
}
