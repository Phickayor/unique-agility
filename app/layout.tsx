import type { Metadata } from "next";
import { Asap, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const asap = Asap({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-asap"
});
const jakar = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jakar"
});
export const metadata: Metadata = {
  title: "Unique Agility",
  description: "Paving the way for new business ventures"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${asap.variable} ${jakar.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
