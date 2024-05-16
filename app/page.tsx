"use client"
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";



import {useState, useEffect} from 'react';
const list = ['my life ', 'my people', 'my work', 'my interests', 'my reflections', 'my books'];
const urls = ['/life', '/people', '/work','/interests','/blog','/books']

// TODo: tours, tags, people 


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setActiveIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
      } else if (event.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % list.length);
      } else if (event.key == 'Enter') {
        window.location.href = urls[activeIndex]
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [activeIndex]);

  return (
    <main className="flex flex-col items-center justify-center px-8">
        <div className="grid grid-cols-1 gap-y-1 gap-x-1 w-full mt-[36vh] items-center justify-center justify-items-center align-items" style={{ fontFamily: 'JetBrains Mono' }}>
          {list.map((id, index) => (
            <Link href="/blog" key={id}>
              <section className={`w-full ${activeIndex === index ? 'active' : ''}`} id={id}>
                <h2 className={`text-sm lowercase`}>
                  {activeIndex === index && <span className="text-[#22c55e]">&gt;</span>} 
                  {"    "}<span className={`${activeIndex === index ? 'underline' : ''}`}>on {id}</span>
                </h2>
              </section>
            </Link>
          ))}
        </div>
      </main>
  );0
}