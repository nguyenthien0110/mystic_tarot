import type { Metadata } from "next";
import { Almendra } from "next/font/google";
import "./globals.css";

const almendra = Almendra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-almendra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiệm Tarot",
  description: "Tiệm Tarot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${almendra.variable} antialiased`}>{children}</body>
    </html>
  );
}
