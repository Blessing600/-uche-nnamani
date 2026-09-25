import Link from "next/link";
import { formatMonth, type Post } from "@/lib/content";

/** Chronological list of essays: quiet date, serif title, hairline rules. */
export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="border-t border-rule">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-rule">
          <Link
            href={`/writing/${post.slug}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-7"
          >
            <time dateTime={post.date} className="label shrink-0 sm:w-24">
              {formatMonth(post.date)}
            </time>
            <span className="font-serif text-entry text-ink transition-colors duration-200 group-hover:text-ink-soft">
              {post.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
