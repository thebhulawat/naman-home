import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const inter =  JetBrains_Mono({ subsets: ["latin"], variable: "--font-sans" });


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
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
    ) } style={{ fontFamily: 'JetBrains Mono' }}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <SiteHeader/>
          <main className="flex-1">{children}</main>
          <SiteFooter/>
        </div>
      </body>
    </html>
  );
}
