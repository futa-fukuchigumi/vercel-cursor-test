import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vercel-cursor-test",
  description: "Minimal Next.js app for Vercel deployment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
