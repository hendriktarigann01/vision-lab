"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";

interface InstagramCarouselProps {
  posts: InstagramPost[];
}

const InstagramCarousel = ({ posts }: InstagramCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, [posts]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;

      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) return "1 week ago";
    if (diffWeeks < 4) return `${diffWeeks} weeks ago`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "1 month ago";
    return `${diffMonths} months ago`;
  };

 const getMediaUrl = (post: InstagramPost) => {
   if (post.media_type === "VIDEO" && post.thumbnail_url) {
     return post.thumbnail_url;
   }
   return post.media_url;
 };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No Instagram posts available</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-12 px-8 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={scrollContainerRef}
            className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex-none w-[220px] md:w-[280px] space-y-4 overflow-hidden"
              >
                <div className="relative w-full h-[380px] bg-black rounded-lg overflow-hidden">
                  <Image
                    src={getMediaUrl(post)}
                    alt="Instagram post"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <p className="text-gray-800 text-sm h-10 line-clamp-2">
                  {post.caption || "No caption"}
                </p>
                <p className="text-gray-400 text-xs">
                  {formatDate(post.timestamp)}
                </p>

                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-3/4 bg-brand-200 hover:bg-brand-300 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-colors"
                >
                  View on Instagram
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => scroll("left")}
          className={`w-12 h-12 rounded-full ${
            canScrollLeft ? "bg-brand-200 hover:bg-brand-300" : "bg-brand-50"
          } flex items-center justify-center transition-colors`}
          aria-label="Previous"
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-5 h-5 text-white mr-0.5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`w-12 h-12 rounded-full ${
            canScrollRight ? "bg-brand-200 hover:bg-brand-300" : "bg-brand-50"
          } flex items-center justify-center transition-colors`}
          aria-label="Next"
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-5 h-5 text-white ml-0.5" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default InstagramCarousel;
