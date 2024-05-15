import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8">
      <div className="flex h-14 max-w-screen-2xl items-center">
        <MainNav/>
      </div>
    </header>
  );
}