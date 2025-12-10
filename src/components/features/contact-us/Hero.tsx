// Hero Contact-Us
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("heroes.contactUs");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=-6.2865656,107.0429841&destination_place_id=ChIJmfk0o_iPaS4R_fgNE7-v15M&travelmode=driving`;
          window.open(mapsUrl, "_blank", "noopener,noreferrer");
        },
        () => {
          // fallback if the user denies location permission
          window.open(
            "https://maps.app.goo.gl/jEcdZf4KxK7v2MXw8",
            "_blank",
            "noopener,noreferrer"
          );
        }
      );
    } else {
      // fallback if the browser doesn't support geolocation
      window.open(
        "https://maps.app.goo.gl/jEcdZf4KxK7v2MXw8",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center z-10 overflow-hidden pt-24 bg-[#FAFAFA] w-full"
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
      <div className="max-w-7xl mx-auto flex flex-col items-center pb-32 md:pb-0 px-10 md:px-6 md:py-8">
        {/* Text content */}
        <div className="space-y-5 m-0 max-w-3xl text-center">
          <p className="text-gray-600 text-sm md:text-sm">{t("label")}</p>

          <h1 className="text-xl md:text-2xl lg:text-3xl text-brand-200 leading-tight font-bold">
            {t("title")}
          </h1>

          <p className="w-full max-w-3xl mx-auto text-gray-600 text-sm md:text-sm">
            {t("description")}
          </p>
        </div>

        {/* Image below with Card and Dot */}
        <div className="relative w-full max-w-xl md:w-5xl md:max-w-7xl h-40 md:h-[450px] flex justify-center items-center">
          <Image
            src="/map-indo.webp"
            alt="Map Indonesia"
            fill
            className="object-contain"
            priority
          />

          {/* Dot marker for Jakarta */}
          <div className="absolute left-[27%] md:left-[27%] top-[65%] md:top-[66%] z-10">
            {/* Pulsing dot animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-50 rounded-full w-2 md:w-3 h-2 md:h-3 animate-ping opacity-75"></div>
              <div className="relative bg-brand-200 rounded-full w-2 md:w-3 h-2 md:h-3 border-2 md:border-3 border-brand-100"></div>
            </div>
          </div>

          {/* Card with location info */}
          <Card className="absolute p-0 left-[5%] md:left-[16%] top-[75%] md:top-[30%] z-20 border-none shadow-none max-w-[180px] md:max-w-60">
            <CardContent className="p-4 space-y-2">
              <div className="items-center space-y-3">
                <Image
                  src="/vision-lab-logo.webp"
                  alt="VisionLAB Logo"
                  width={120}
                  height={50}
                  className="w-24 md:w-32 shrink-0 mx-auto"
                />
                <p className="text-xs text-gray-600 mt-1 text-center">
                  {t("mapAddress")}
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://maps.app.goo.gl/jEcdZf4KxK7v2MXw8"
                    onClick={handleClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-200 hover:bg-brand-300 cursor-pointer text-white text-xs py-3 px-6 rounded-3xl flex items-center justify-center gap-2 transition-colors"
                  >
                    {t("viewMap")}
                    <ChevronRight width={16} height={16} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
