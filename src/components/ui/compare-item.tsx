import React, { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
}

const CompareItem: React.FC<{
  item: GalleryItem;
  beforeLabel: string;
  afterLabel: string;
}> = ({ item, beforeLabel, afterLabel }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging && e.type !== "touchmove") return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    let clientX: number;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* Before and After Slider */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 cursor-col-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After Image (Full) */}
        <Image
          src={item.afterImage}
          alt={`${afterLabel} - ${item.title}`}
          fill
          className="object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={item.beforeImage}
            alt={`${beforeLabel} - ${item.title}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-brand-100 shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 text-brand-200" />
          </div>
        </div>
      </div>

      {/* Title and Location */}
      <div className="space-y-2 text-gray-600">
        <div className="flex text-xs justify-between">
          <p>Before</p>
          <p>After</p>
        </div>
        <h3 className="text-sm font-semibold">{item.title}</h3>
        <p className="text-xs">{item.location}</p>
      </div>
    </div>
  );
};
export default CompareItem;
