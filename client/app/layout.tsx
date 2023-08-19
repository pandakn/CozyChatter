import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CozyChatter",
  description:
    "CozyChatter - A delightful and cozy real-time chat web app for warm and engaging conversations.",
  keywords:
    "CozyChatter, chat app, real-time chat, cozy conversations, instant messaging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} data-theme="cupcake">
        {children}
        <Footer />
      </body>
    </html>
  );
}
