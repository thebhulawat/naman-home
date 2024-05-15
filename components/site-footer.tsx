import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8">
      <div className="mb-3 mt-14 flex flex-col items-start">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href={siteConfig.links.mail}>
            <span className="sr-only">Mail</span>
            <Mail className="h-3 w-3 text-green-500" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-3 w-3 text-green-500" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-3 w-3 text-green-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}