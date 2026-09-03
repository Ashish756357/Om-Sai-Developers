import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: "Om Sai Developers | Bungalow Plots in Boisar East",
  description: "Secure clear-title bungalow plots from 2,000 sq. ft. at Village Gundhle, Boisar East, across 77 acres of green countryside.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className={`${inter.variable} ${jakarta.variable}`}>{children}</body></html>;
}
