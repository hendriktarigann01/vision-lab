"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SectionCTA = () => {
  return (
    <section
      id="contact-us"
      className="bg-[#FAFAFA] py-10 md:py-16 px-8 md:px-6 flex items-center justify-center"
    >
      <div
        className="relative max-w-7xl bg-[#AFAFAF33]/20 px-8 py-12 mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 overflow-visible rounded-4xl"
        style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}
      >
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Title */}
          <h2 className="text-lg md:text-4xl text-gray-900">
            Need Screen Repair
            <br />
            or Maintenance Assistance?
          </h2>
          <p className="text-sm md:text-base px-0 text-gray-600 mx-auto">
            Discuss your needs with the VisionLab team. We are ready to help you
            find the best solution for repair, maintenance, or performance
            enhancement of your LED & LCD screens.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
            >
              Consult Now
            </Button>
          </div>
        </div>

        {/* Character container */}
        <div className="flex-1 flex justify-center relative overflow-visible mt-0">
          <div className="relative md:absolute md:-top-90 w-[300px] h-[300px] md:w-[550px] md:h-[550px]">
            <Image
              src="/vl-human-girl.png"
              alt="Lab Leaks Top"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
