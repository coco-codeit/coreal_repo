"use client";

import { SessionProvider } from "next-auth/react";

/**
 * Provider 컴포넌트
 *
 * @description
 * NextAuth의 SessionProvider를 래핑하여 전체 애플리케이션에 세션 컨텍스트를 제공합니다.
 *
 */

export function Provider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
