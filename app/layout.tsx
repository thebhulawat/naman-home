import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
//import '@/styles/font.css'

const jetBrainMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-sans"
});


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem] dark">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
    ) } style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader/>
          <main className="flex-1">{children}</main>
          <SiteFooter/>
        </div>
      </body>
    </html>
  );
}
