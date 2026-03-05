import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "./providers";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc Pios — Portfolio",
  description: "Design engineer crafting intuitive user experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <SmoothScroll>
        <body className={`${inter.variable} font-sans antialiased`}>
          {children}
        </body>
      </SmoothScroll>
    </html>
  );
}
