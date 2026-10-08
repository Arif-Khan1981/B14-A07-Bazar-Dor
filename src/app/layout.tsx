import type { Metadata } from "next";
import { Noto_Serif_Bengali} from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";


const noto_Serif_Bengali = Noto_Serif_Bengali({
  variable: "--font-geist-sans",
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের আজকের বাজারদর এক নজরে।y create next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${noto_Serif_Bengali.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
