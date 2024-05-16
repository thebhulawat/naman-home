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
      <time dateTime={date} className={`text-sm italic`}>
        <Link href={slug}>{formatDate(date)}</Link>
      </time>
      <h2 className={`text-sm ${className || ''}`}>
        <Link href={slug}>{title}</Link>
      </h2>
    </article>
  );
}