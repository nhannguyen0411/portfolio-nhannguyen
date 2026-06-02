import { MotionProvider } from "@/components/MotionProvider";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen Trong Nhan — Software Engineer",
  description:
    "Product-focused engineer building SaaS, mobile apps, and real-time systems. React · Flutter · Next.js.",
  openGraph: {
    title: "Nguyen Trong Nhan — Software Engineer",
    description: "Turns complex problems into elegant products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
