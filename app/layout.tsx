import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/constants/navbar";
import { Footer } from "@/components/ui/constants/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcropsales.com"),
  keywords: [
    "bulk peanuts",
    "wholesale macadamia nuts",
    "bulk beans",
    "industrial nut supply",
    "commercial bean distributor",
    "large-scale peanut orders",
    "macadamia nuts wholesale",
    "bulk legume supplier",
    "peanut wholesaler",
    "commercial nut importer",
    "bulk dried beans",
    "wholesale raw nuts",
    "large quantity bean orders",
    "bulk food service nuts",
    "wholesale peanut supplier",
    "industrial bean processor",
    "bulk nut export",
    "commercial grade peanuts",
    "wholesale bean varieties",
    "bulk macadamia procurement",
    "large-volume nut orders",
    "wholesale legume distributor",
    "bulk peanut processing",
    "commercial bean buyer",
    "wholesale nut trader",
    "bulk bean importer",
    "large-scale nut distribution",
    "industrial peanut supply chain",
    "wholesale macadamia sourcing",
    "bulk bean wholesaler",
  ],
  title: "Global Crop Sales | Home ",
  openGraph: {
    description:
      "Premier global supplier of high-quality bulk nuts and beans. Specializing in wholesale peanuts, macadamia nuts, and diverse bean varieties for industrial and commercial buyers. ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-full w-full bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
