"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MoveDown, MoveUp, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SectionService = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "General Check-up",
      desc: "A thorough initial inspection to detect damage or potential issues in your LED screen before further repairs are made. The VisionLab team will perform a technical diagnosis using professional equipment to determine the most efficient and cost-effective treatment.",
      img: "/services/service-check-up.png",
    },
    {
      title: "Completed Service",
      desc: "Every repair is carried out to a high standard to ensure that visual performance is restored to its original maximum level.",
      img: "/services/service-completed.png",
    },
    {
      title: "Routine Cleaning (Annually)",
      desc: "Ensuring that every component works optimally through regular checks, system updates, and color calibration.",
      img: "/services/service-routine-cleaning.png",
    },
    {
      title: "Long-term Contract for Distributor",
      desc: "Deep cleaning is performed annually to maintain display quality and extend screen life. We use safe methods and special cleaning materials to keep the screen clear, dust-free, and functioning perfectly without risk of damage.",
      img: "/services/service-contract.png",
    },
  ];

  const handleServiceClick = (idx: number) => {
    if (activeIndex !== idx) {
      setActiveIndex(idx);
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next
      if (activeIndex < services.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }

    if (isRightSwipe) {
      // Swipe right - previous
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <section id="service" className="py-10 md:py-16 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl">
        <h2 className="w-full md:w-2/5 text-lg md:text-4xl text-center md:text-left mb-6 md:mb-12 text-gray-900">
          Complete services for all repair and maintenance needs
        </h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {/* Tabs */}
        <div
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-light transition-colors ${
                activeIndex === idx
                  ? "bg-orange-500 text-white"
                  : "text-gray-600"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="rounded-2xl mb-6">
          <p className="text-gray-600 text-sm mb-4">
            <span className="text-gray-900 font-medium">
              {services[activeIndex].title},
            </span>{" "}
            {services[activeIndex].desc}
          </p>
        </div>

        {/* Image with Swipe Functionality */}
        <div
          ref={imageRef}
          className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-200 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={services[activeIndex].img}
            alt={services[activeIndex].title}
            width={350}
            height={350}
            className="object-cover w-full h-full transition-transform duration-300"
            draggable={false}
          />
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx ? "bg-orange-500 w-8" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Content */}
      <div
        className="hidden md:block max-w-7xl mx-auto bg-gray-100/50 p-10 rounded-2xl"
        style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}
      >
        <div className="grid md:grid-cols-2 gap-24 mt-8">
          {/* Arrow Buttons and Services */}
          <div className="flex gap-4 h-full items-center">
            {/* Arrow Buttons */}
            <div className="flex flex-col items-center justify-start gap-6 pt-4">
              <Button
                onClick={handlePrevious}
                disabled={activeIndex === 0}
                className={`w-10 h-10 rounded-full flex items-center cursor-pointer justify-center transition-colors ${
                  activeIndex === 0
                    ? "bg-orange-500/30 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                <MoveUp className="text-white" size={20} />
              </Button>
              <Button
                onClick={handleNext}
                disabled={activeIndex === 3}
                className={`w-10 h-10 rounded-full flex items-center cursor-pointer justify-center transition-colors ${
                  activeIndex === 3
                    ? "bg-orange-500/30 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                <MoveDown className="text-white" size={20} />
              </Button>
            </div>

            {/* Services List */}
            <div className="flex-1">
              {services.map((service, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleServiceClick(idx)}
                    className="mb-4 p-4 bg-gray-100/50 rounded-lg cursor-pointer"
                    style={{
                      boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {!isActive && (
                        <div className="w-6 h-6 text-orange-500 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                          <Plus className="w-full h-full" />
                        </div>
                      )}

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        {isActive && (
                          <>
                            <p className="text-gray-600 text-sm mb-3">
                              {service.desc}
                            </p>
                            <Button
                              variant="ghost"
                              className="w-40 bg-orange-500 hover:bg-orange-600 rounded-3xl text-white hover:text-white cursor-pointer font-normal text-sm py-3 h-auto transition-all flex items-center gap-2"
                            >
                              View Service <ArrowRight className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {/* Top Left */}
              <Card
                className={`relative border-none w-full h-80 rounded-lg overflow-hidden transition-all ${
                  activeIndex !== 0 ? "grayscale opacity-40" : ""
                }`}
              >
                <Image
                  src={services[0].img}
                  alt={services[0].title}
                  fill
                  className="object-cover w-full h-full"
                />
              </Card>

              {/* Bottom Left */}
              <Card
                className={`relative border-none w-full h-36 rounded-lg overflow-hidden transition-all ${
                  activeIndex !== 1 ? "grayscale opacity-40" : ""
                }`}
              >
                <Image
                  src={services[1].img}
                  alt={services[1].title}
                  className="object-cover w-full h-full"
                  fill
                />
              </Card>
            </div>

            <div className="flex flex-col gap-5">
              {/* Top Right */}
              <Card
                className={`relative border-none w-full h-36 rounded-lg overflow-hidden transition-all ${
                  activeIndex !== 3 ? "grayscale opacity-40" : ""
                }`}
              >
                <Image
                  src={services[3].img}
                  alt={services[3].title}
                  className="object-cover w-full h-full"
                  fill
                />
              </Card>

              {/* Bottom Right */}
              <Card
                className={`relative border-none w-full h-80 rounded-lg overflow-hidden transition-all ${
                  activeIndex !== 2 ? "grayscale opacity-40" : ""
                }`}
              >
                <Image
                  src={services[2].img}
                  alt={services[2].title}
                  fill
                  className="object-cover w-full h-full"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionService;
