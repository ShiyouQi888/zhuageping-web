import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "抓个屏 | Zhuageping",
  description: "A fast, private Windows screenshot and screen recording tool.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
