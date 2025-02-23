import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Photo feed",
  description:
    "Simple photo feed website using React JS v19, Next JS v15 and TypeScript - Next JS intercepted routing mechnism example",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col justify-center items-center gap-4 bg-[#f2f2f2]`}
      >
        <Header />
        <main className="max-sm:w-full xl:w-4/5 flex flex-col p-4">
          {children}
          {modal}
        </main>
        <Footer />
      </body>
    </html>
  );
}
