import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hashscribe.co"
  ),
  title: {
    default: "HashScribe — Software Studio",
    template: "%s | HashScribe",
  },
  description:
    "HashScribe is a software studio that crafts premium digital products. From web and mobile apps to full-stack platforms, we turn ideas into elegant, scalable solutions.",

  keywords: [
    "HashScribe",
    "software studio",
    "software company",
    "web development",
    "mobile app development",
    "Next.js development",
    "React Native development",
    "UI UX design",
    "full-stack development",
    "startup software agency",
  ],

  authors: [{ name: "HashScribe" }],
  creator: "HashScribe",
  publisher: "HashScribe",

  openGraph: {
    title: "HashScribe — Software Studio",
    description: "We build digital products that matter.",
    url: "https://hashscribe.co",
    type: "website",
    locale: "en_US",
    siteName: "HashScribe",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
