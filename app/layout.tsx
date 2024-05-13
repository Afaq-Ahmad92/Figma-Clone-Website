import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ 
  subsets: ["latin"] ,
  variable : '--font-sans',
  weight : ['400', '600', '800']
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimalist Figma clone using Fabris.js and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-gray-200 `}>{children}</body>
    </html>
  );
}
