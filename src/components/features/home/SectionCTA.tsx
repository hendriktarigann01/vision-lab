"use client";
import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const SectionCTA = () => {
  return (
    <section
      id="contact-us"
      className="bg-[#FAFAFA] py-16  px-4 flex items-center justify-center"
    >
      <div className="relative max-w-7xl bg-[#AFAFAF33]/20 px-8 py-12 mx-auto flex flex-col md:flex-row items-center gap-8 overflow-visible rounded-4xl"
        style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Need Screen Repair
            <br />
            or Maintenance Assistance?
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Discuss your needs with the VisionLab team. We are ready to help you
            find the best solution for repair, maintenance, or performance
            enhancement of your LED & LCD screens.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Consult Now
          </Button>
        </div>

        {/* Character container */}
        <div className="flex-1 flex justify-center relative overflow-visible">
          <div className="absolute -top-80 w-[550px] h-[550px]">
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
