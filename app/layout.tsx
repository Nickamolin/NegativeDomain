import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Negative Domain",
  description: "Art Generated via Self-Made and Royalty-Free Assets",
  metadataBase: new URL("https://negativedomain.com"),

  // Open Graph — controls link previews on Discord, Facebook, LinkedIn, etc.
  openGraph: {
    title: "Negative Domain",
    description: "Art Generated via Self-Made and Royalty-Free Assets",
    url: "https://negativedomain.com",
    siteName: "Negative Domain",
    images: [
      {
        url: "/branding/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Negative Domain Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Negative Domain",
    description: "Art Generated via Self-Made and Royalty-Free Assets",
    images: ["/branding/logo.jpg"],
  },

  // Icons — Next.js will emit the correct <link> tags automatically
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      { rel: "icon", url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
  },

  // Manifest link (references app/manifest.ts at runtime)
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={cn(inter.className, "relative no-scrollbar")}>{children}</body>
    </html>
  );
}
