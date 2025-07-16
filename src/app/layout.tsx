import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikon Gallery",
  description: "A beautiful photo gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          enableSystem={true}
          attribute="class"
        >
          {/* 添加全局导航栏 */}
          <header className="p-4 flex justify-end items-center">
            <ThemeToggle />
          </header>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
