

import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AudioPlayer } from "@/components/AudioPlayer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const amiri = Amiri({ subsets: ['arabic', 'latin'], weight: ['400', '700'], variable: '--font-amiri' });

export const metadata: Metadata = {
  title: "My Du'a Book",
  description: "A collection of essential supplications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://lh3.googleusercontent.com; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;" />
      </head>
      <body className={`${inter.variable} ${amiri.variable} font-sans antialiased min-h-screen transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
            <AudioPlayer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
