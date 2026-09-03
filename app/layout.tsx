import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serene Palms | Coastal Villa Plots in Dapoli",
  description: "Collector-sanctioned NA residential plots and bespoke holiday villas in Village Nargoli, Dapoli.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
