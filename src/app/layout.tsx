import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Providers from "./providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Online Store - Home",
  description: "Discover the best products in our online store",
  keywords: ["Products", "Shopping", "Offers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased w-screen`}>
        <Providers>
          <Header />
          <main className="pt-10 pb-20 px-30 max-sm:px-5">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
