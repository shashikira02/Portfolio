import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashi Kiran | Portfolio",
  description: "Fullstack Developer Portfolio build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
