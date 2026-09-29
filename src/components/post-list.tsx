import Link from "next/link";
import { formatMonth, type Post } from "@/lib/content";
import { PostImage } from "./post-image";

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

/** Thoughts in Ink listing: photo, serif title and a short description. */
export function JournalList({ posts }: { posts: Post[] }) {
  return (
    <ul className="border-t border-rule">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-rule">
          <Link
            href={`/writing/${post.slug}`}
            className="group grid gap-5 py-8 sm:grid-cols-[14rem_1fr] sm:gap-10 sm:py-10"
          >
            <PostImage post={post} sizes="(min-width: 640px) 14rem, 100vw" />
            <span className="flex flex-col gap-3 sm:pt-1">
              <span className="font-serif text-entry text-balance text-ink transition-colors duration-200 group-hover:text-ink-soft">
                {post.title}
              </span>
              <span className="max-w-[32rem] text-ink-soft">{post.description}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
