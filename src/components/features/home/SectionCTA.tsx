"use client";
import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const SectionCTA = () => {
  return (
    <section className="bg-linear-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
        <div className="flex-1 flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Character  */}
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
