import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "チーム自己紹介サイト",
  description: "ハッカソンチームのメンバー紹介ページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="nav">
          <Link href="/" className="nav-title">
            🚀 Team Introduction
          </Link>
          <Link href="/" className="nav-link">
            メンバー一覧
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
