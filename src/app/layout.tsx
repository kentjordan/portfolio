import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MobileNavbarMenu } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Kent Jordan",
  description: "Kent John Jordan",
  // Link previews show the name, on the image from opengraph-image.tsx.
  openGraph: {
    type: "website",
    title: "Kent John B. Jordan",
  },
  // X falls back to the Open Graph image and title.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-black text-white flex items-center flex-col h-screen lg:pl-60`}>
        {/* Progress bar across the top of the screen during route changes.
            #6DD5FA is the cyan of the section headings. Same-page hash links
            (the sidebar's /#works etc. on the home page) only scroll, so they
            don't show it. */}
        <NextTopLoader
          color='#6DD5FA'
          height={3}
          showSpinner={false}
          showForHashAnchor={false}
        />
        <Navbar />
        <MobileNavbarMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
