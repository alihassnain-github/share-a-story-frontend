import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/theme-provider";

const satoshi = localFont({
  src: "/fonts/satoshi/Satoshi-Medium.woff2",
})

export const stardom = localFont({
  src: "/fonts/stardom/Stardom-Regular.woff2",
})

export const metadata: Metadata = {
  title: "Share a Story",
  description:
    "Share a Story — a simple, beautiful platform to write and publish personal essays, memories, and micro-stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <ThemeProvider>
        <body className={satoshi.className}>
          {children}
        </body>
      </ThemeProvider>
    </html >
  );
}
