// Hero Contact Us
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
// import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  // const t = useTranslations("hero");
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
      <div className="absolute -right-40 top-0 w-[150%] h-[110%] md:w-full md:h-screen pointer-events-none z-0">
        <Image
          src="/lableaks_top.webp"
          alt="Lab Leaks Top"
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center px-10 md:px-6 pb-32 md:py-8 space-y-8">
        {/* Text content */}
        <div className="space-y-4 m-0 max-w-3xl text-center">
          <p className="text-gray-600 text-sm md:text-sm">Contact Us</p>

          <h1 className="text-xl md:text-2xl lg:text-3xl text-brand-200 leading-tight font-bold">
            Let&apos;s Connect with VisionLab
          </h1>

          <p className="w-80 mx-auto text-gray-600 text-sm md:text-sm">
            Our office is located in Jakarta, Indonesia. Reach out to our team
            for inquiries, collaborations, or technical assistance regarding LED
            and LCD services.
          </p>
        </div>

        {/* Image below with Card and Dot */}
        <div className="relative w-xl h-40 md:w-5xl md:h-[400px] flex justify-center items-center">
          <Image
            src="/map-indo.webp"
            alt="Map Indonesia"
            fill
            className="object-contain"
            priority
          />

          {/* Dot marker for Jakarta */}
          <div className="absolute left-[33%] md:left-[27%] top-[66%] z-10">
            {/* Pulsing dot animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-50 rounded-full w-2 md:w-3 h-2 md:h-3 animate-ping opacity-75"></div>
              <div className="relative bg-brand-200 rounded-full w-2 md:w-3 h-2 md:h-3 border-2 md:border-3 border-brand-100 shadow-lg"></div>
            </div>
          </div>

          {/* Card with location info */}
          <Card className="absolute p-0 left-[18%] md:left-[16%] top-[75%] md:top-[25%] z-20 shadow-lg max-w-[180px] md:max-w-[240px]">
            <CardContent className="p-4 space-y-2">
              <div className="items-center space-y-3">
                <Image
                  src="/vision-lab-logo.webp"
                  alt="Vision Lab Logo"
                  width={120}
                  height={50}
                  className="w-24 md:w-32 flex-shrink-0 mx-auto"
                />
                <p className="text-xs text-gray-600 mt-1 text-center">
                  Celebration AA15/25, Grand Wisata, Bekasi, Jawa Barat
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://maps.app.goo.gl/jEcdZf4KxK7v2MXw8"
                    onClick={handleClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white text-xs py-3 px-6 rounded-3xl flex items-center justify-center gap-2 transition-colors"
                  >
                    View Map
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
