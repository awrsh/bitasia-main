import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";


export const metadata: Metadata = {
  title: "4588093",
  description: "صرافی بیت آسیا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="light">
        <ThemeContextProvider>
          <Header/>
          {children}
          <Footer/>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
