import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import Navbar from "./components/Navbar";
import { ReactQueryClientProvider } from "./components/ReactQueryClientProvider";
import { Provider as SessionProvider } from "./components/SessionProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// pretendard 폰트 설정
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pretendard.variable} font-pretendard`}>
      <body className="w-full bg-gray-100">
        <ReactQueryClientProvider>
          <SessionProvider>
            <main>
              <Navbar />
              {children}
            </main>
          </SessionProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
