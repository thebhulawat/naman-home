"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/animate.css";

import {useEffect} from 'react';


export function MainNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Check if the 'visited' flag is set in local storage
  const visited = typeof window !== 'undefined' ? localStorage.getItem('visited') : null;

  // If not visited, set the animation class and the 'visited' flag
  const animationClass = !visited && isHomePage ? 'name-typewriter' : '';

  // Set 'visited' flag in local storage after first render
  useEffect(() => {
    if (typeof window !== 'undefined' && !visited) {
      localStorage.setItem('visited', 'true');
    }
  }, [visited]);

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center">
        <span className={`text-xl font-bold lowercase text-[#22c55e] ${animationClass}`} style={{ fontFamily: 'JetBrains Mono' }}>{siteConfig.name}</span>
      </Link>
    </nav>
  );
}
