"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const SectionSocmed = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      id: 1,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 2,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 3,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 4,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 5,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 6,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 7,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 8,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 9,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
    {
      id: 10,
      image: "/post-visionLAB.png",
      title:
        "VisionLAB by MJ Solution Indonesia. A professional LED & LCD service center...",
      weeks: "8 weeks",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust sesuai kebutuhan
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

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8 md:px-6">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          Latest Stories from Us
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          The latest moments, projects, and activities we share on Instagram.
        </p>
      </div>

      {/* Cards Carousel - Full Width */}
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
                <div className="relative w-full h-80 bg-black">
                  <Image
                    src={post.image}
                    alt="VisionLAB post"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-800 text-sm line-clamp-3">
                  {post.title}
                </p>
                <p className="text-gray-400 text-xs">{post.weeks}</p>

                <button className="w-3/4 bg-brand-200 hover:bg-brand-300 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-colors">
                  View on Instagram
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-brand-50  flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-white mr-0.5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-brand-200 hover:bg-brand-300 flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white ml-0.5" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SectionSocmed;
