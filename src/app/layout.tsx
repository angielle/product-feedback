import type { Metadata } from "next";
import "./globals.css";
import { Jost } from 'next/font/google'

const jost = Jost({
  weight: ['400', '700'], 
  style: 'normal', 
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
