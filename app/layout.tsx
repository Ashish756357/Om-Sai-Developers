import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Om Sai Developers | Township Plots in Nargoli, Dapoli",
    template: "%s | Om Sai Developers",
  },
  description:
    "Explore 10-acre township plots in Nargoli, Dapoli, from 3,000 sq. ft. at ₹750 per sq. ft., 210 km from Pune and 230 km from Mumbai.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Om Sai Developers",
    title: "Om Sai Developers | Township Plots in Nargoli, Dapoli",
    description:
      "Explore 10-acre township plots in Nargoli, Dapoli, from 3,000 sq. ft. at ₹750 per sq. ft., 210 km from Pune and 230 km from Mumbai.",
    images: [
      {
        url: "/om-sai-developers-logo.jpg",
        alt: "Om Sai Developers logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Om Sai Developers | Township Plots in Nargoli, Dapoli",
    description:
      "Explore 10-acre township plots in Nargoli, Dapoli, from 3,000 sq. ft. at ₹750 per sq. ft., 210 km from Pune and 230 km from Mumbai.",
    images: ["/om-sai-developers-logo.jpg"],
  },
  icons: {
    icon: "/om-sai-developers-logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
