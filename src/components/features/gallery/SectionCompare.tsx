"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import CompareItem from "@/components/ui/compare-item";
import { ArrowDown } from "lucide-react";
import { outdoorGalleryItems, indoorGalleryItems } from "@/data/galleryData";

type GalleryType = "outdoor" | "indoor";

const SectionCompare: React.FC = () => {
  const t = useTranslations("heroes.gallery");
  const [activeType, setActiveType] = useState<GalleryType>("outdoor");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleItems(mobile ? 3 : 6);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (type: GalleryType) => {
    setActiveType(type);
    setVisibleItems(isMobile ? 3 : 6);
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + (isMobile ? 3 : 6));
  };

  const currentGalleryItems =
    activeType === "outdoor" ? outdoorGalleryItems : indoorGalleryItems;
  const hasMore = visibleItems < currentGalleryItems.length;

  return (
    <section
      id="gallery"
      className="relative flex flex-col items-center justify-center z-10 overflow-hidden pt-24 bg-[#FAFAFA] w-full"
    >
      <div className="absolute -right-40 top-0 w-[150%] h-[600px] md:w-full md:h-[700px] pointer-events-none z-0">
        <Image
          src="/lableaks_top.webp"
          alt="Lab Leaks Top"
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center pb-0 px-10 md:px-6 md:py-8">
        {/* Text content */}
        <div className="space-y-5 m-0 max-w-3xl text-center relative z-10">
          <p className="text-gray-600 text-sm md:text-sm">{t("label")}</p>

          <h1 className="text-xl md:text-2xl lg:text-3xl text-brand-200 leading-tight font-bold">
            {t("title")}
          </h1>

          <p className="w-full max-w-3xl mx-auto text-gray-600 text-sm md:text-sm">
            {t("description")}
          </p>
        </div>
      </div>

      {/* Toggle */}
      <div className="w-[90%] md:w-[40%] lg:w-[15%] gap-2 flex justify-between bg-[#F5F5F5] px-2 py-2 rounded-2xl mt-6">
        <button
          onClick={() => handleToggle("outdoor")}
          className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
            activeType === "outdoor"
              ? "bg-brand-200 text-white"
              : "text-brand-200 hover:bg-gray-200"
          }`}
        >
          Outdoor
        </button>
        <button
          onClick={() => handleToggle("indoor")}
          className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
            activeType === "indoor"
              ? "bg-brand-200 text-white"
              : "text-brand-200 hover:bg-gray-200"
          }`}
        >
          Indoor
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 relative mt-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentGalleryItems.slice(0, visibleItems).map((item) => (
            <CompareItem
              key={`${activeType}-${item.id}`}
              item={item}
              beforeLabel={t("before")}
              afterLabel={t("after")}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-[#FF6B00] hover:bg-[#E55F00] text-white px-8 py-3 rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              Load More
              <ArrowDown size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionCompare;
