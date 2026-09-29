import Image from "next/image";
import type { Post } from "@/lib/content";

/**
 * An essay's 3:2 photo, used in the Thoughts in Ink listing and on the
 * essay page. Until a photo is supplied it shows a marked placeholder;
 * the required images are described in content/writing/IMAGES.md.
 */
export function PostImage({
  post,
  sizes,
  preload = false,
}: {
  post: Post;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden bg-rule/40">
      {post.image ? (
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center border border-dashed border-ink-faint/50">
          <span className="label text-ink-faint">Image to add</span>
        </div>
      )}
    </div>
  );
}
