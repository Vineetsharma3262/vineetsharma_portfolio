import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vineet Sharma | Senior Frontend Developer | React | Next.js | TypeScript",
  description: "Portfolio of Vineet Sharma - Senior Frontend Developer with 5.6+ years of experience building responsive, high-performance web applications using React, Next.js, TypeScript, Redux Toolkit, and modern web technologies",
  keywords: ["Vineet Sharma", "Frontend Developer", "React", "Next.js", "TypeScript", "Redux Toolkit", "Web Development", "Senior Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
