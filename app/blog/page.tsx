'use client'
import { useState, useEffect } from 'react';
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setActiveIndex((prevIndex) => prevIndex === 0 ? displayPosts.length - 1 : Math.max(0, prevIndex - 1));
      } else if (event.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => prevIndex === displayPosts.length - 1 ? 0 : Math.min(displayPosts.length - 1, prevIndex + 1));
      } else if (event.key === 'Enter') {
        // Navigate to the post's page when Enter is pressed
        const post = displayPosts[activeIndex];
        if (post) {
          router.push(`/blog/${post.slugAsParams}`); // Adjust the URL to match your routing logic
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, displayPosts.length, router]);

  return (
    <div className="max-w-2xl px-8 py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 mb-6 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="mr-2 font-black text-xl lg:text-xl">reflections</h1>
        </div>
      </div>
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
        {displayPosts.map((post, index) => {
          const { slug, date, title, description } = post;
          return (
            <li key={slug} className={`w-full flex items-center ${activeIndex === index ? 'active' : ''}`}>
              <span className={`mr-2 ${activeIndex === index ? 'text-[#22c55e]' : 'opacity-0'}`}>&gt;</span>
              <PostItem
                slug={slug}
                date={date}
                title={title}
                description={description}
                className={`${activeIndex === index ? 'underline' : ''}`}
              />
            </li>
          );
        })}
      </ul>
      ) : (
        <p>Its empty af here</p>
      )}
    </div>
  );
}