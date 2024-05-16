"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/animate.css";


import { Space_Mono} from 'next/font/google'
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
});

export function MainNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/'
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center">
        <span className={`text-xl font-bold lowercase text-[#22c55e] ${isHomePage ? 'name-typewriter' : ''}`} style={{ fontFamily: 'JetBrains Mono' }}>{siteConfig.name}</span>
      </Link>
    </nav>
  );
}
