import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const openSauce = localFont({
  src: [
    {
      path: "./fonts/OpenSauceOne-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenSauceOne-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/OpenSauceOne-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/OpenSauceOne-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSauce.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
