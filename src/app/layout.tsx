import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MobileNavbarMenu } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Kent Jordan",
  description: "Kent John Jordan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-black text-white flex items-center flex-col h-screen`}>
        <Navbar />
        <MobileNavbarMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
