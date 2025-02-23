import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
