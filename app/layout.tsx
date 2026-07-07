import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "جربة كونسول - مركز صيانة أجهزة بلايستيشن والكونسول",
  description: "المركز الأول لإصلاح وصيانة الكونسول في جزيرة جربة. إصلاح احترافي لأجهزة بلايستيشن 4 وبلايستيشن 5 والتحكم بأسعار تنافسية وضمان موثوق.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
