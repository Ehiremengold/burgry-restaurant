import type { Metadata } from "next";
import "./globals.css";
import { Oswald, DM_Sans } from "next/font/google";
import PrelineScript from "./components/PrelineScript";

// Import Oswald and DM Sans
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Burgry – Delicious Burgers & Exclusive Deals Delivered to You",
  description:
    "Craving juicy burgers? Order from Burgry and enjoy fresh, flavorful meals delivered right to your door. Exclusive deals, fast delivery – satisfaction guaranteed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${dmSans.variable} antialiased`}>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
