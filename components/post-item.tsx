import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  className?: string;
}

export function PostItem({ slug, title, description, date, className}: PostItemProps) {
  return (
    <article className="flex items-start space-x-4 py-2">
      <time dateTime={date} className={`text-sm italics ${className || ''}`}>
        {formatDate(date)}
      </time>
      <h2 className="text-sm">
        <Link href={slug}>{title}</Link>
      </h2>
    </article>
  );
}