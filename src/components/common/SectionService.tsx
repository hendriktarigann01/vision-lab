"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveDown, MoveUp, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { contentVariants, defaultTransition } from "@/lib/animations";

const SectionService = () => {
  const t = useTranslations("services");
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const locale = params.locale as string;

  const services = [
    {
      title: t("items.completeService.title"),
      desc: t("items.completeService.description"),
      img: "/services/service-complete-service.webp",
      slug: "complete-service",
    },
    {
      title: t("items.maintenance.title"),
      desc: t("items.maintenance.description"),
      img: "/services/service-maintenance.webp",
      slug: "maintenance",
    },
    {
      title: t("items.onSiteTraining.title"),
      desc: t("items.onSiteTraining.description"),
      img: "/services/service-training.webp",
      slug: "on-site-training",
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
    setTouchEnd(0);
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
      if (activeIndex < services.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }

    if (isRightSwipe) {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <section id="service" className="py-16 md:py-24 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl">
        <h2 className="w-full md:w-2/5 text-lg md:text-4xl text-center md:text-left mb-6 md:mb-12 text-gray-900">
          {t("title")}
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
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors ${
                activeIndex === idx
                  ? "bg-brand-200 text-white"
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

          <Button
            asChild
            variant="ghost"
            className="w-2/5 px-4 py-2 bg-brand-200 hover:bg-brand-300 rounded-3xl text-white hover:text-white cursor-pointer font-normal text-sm h-auto transition-all flex items-center gap-2"
          >
            <Link href={`/${locale}/services/${services[activeIndex].slug}`}>
              {t("viewService")} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
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
            loading="lazy"
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
                activeIndex === idx ? "bg-brand-200 w-8" : "bg-gray-300 w-2"
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
        <div className="grid md:grid-cols-2 mx-16 gap-24 mt-8">
          {/* Arrow Buttons and Services */}
          <div className="flex gap-4 h-full items-center">
            {/* Arrow Buttons */}
            <div className="flex flex-col items-center justify-start gap-6 pt-4">
              <Button
                onClick={handlePrevious}
                disabled={activeIndex === 0}
                className={`w-10 h-10 rounded-full flex items-center cursor-pointer justify-center transition-colors ${
                  activeIndex === 0
                    ? "bg-brand-50 cursor-not-allowed"
                    : "bg-brand-200 hover:bg-brand-300"
                }`}
              >
                <MoveUp className="text-white" size={20} />
              </Button>
              <Button
                onClick={handleNext}
                disabled={activeIndex === 2}
                className={`w-10 h-10 rounded-full flex items-center cursor-pointer justify-center transition-colors ${
                  activeIndex === 2
                    ? "bg-brand-50 cursor-not-allowed"
                    : "bg-brand-200 hover:bg-brand-300"
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
                        <div className="w-6 h-6 text-brand-200 flex items-center justify-center shrink-0">
                          <Plus className="w-full h-full" />
                        </div>
                      )}

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key={`content-${idx}`}
                              variants={contentVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              transition={defaultTransition}
                            >
                              <p className="text-gray-600 text-sm mb-3">
                                {service.desc}
                              </p>
                              <Link
                                href={`/${locale}/services/${service.slug}`}
                              >
                                <Button
                                  variant="ghost"
                                  className="w-40 bg-brand-200 hover:bg-brand-300 rounded-3xl text-white hover:text-white cursor-pointer font-normal text-sm py-3 h-auto transition-all flex items-center gap-2"
                                >
                                  {t("viewService")}{" "}
                                  <ArrowRight className="w-4 h-4" />
                                </Button>
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {/* Top Left */}
              <Card
                className={`relative border-none w-full h-80 rounded-lg overflow-hidden transition-all ${
                  activeIndex !== 0 ? "grayscale opacity-40" : ""
                }`}
              >
                <Image
                  loading="lazy"
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
                  loading="lazy"
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
                className={`relative border-none w-full h-full rounded-lg overflow-hidden transition-all ${
                  activeIndex !== 2 ? "grayscale opacity-40" : ""
                }`}
              >
                <Image
                  loading="lazy"
                  src={services[2].img}
                  alt={services[2].title}
                  className="object-cover w-full h-full"
                  fill
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
