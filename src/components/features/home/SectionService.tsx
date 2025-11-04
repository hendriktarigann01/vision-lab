"use client";
import React, { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const SectionService = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Complete services for all repair
          <br />
          and maintenance needs
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Services */}
          <div>
            {services.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`mb-4 p-4 bg-white rounded-lg ${
                    isActive ? "shadow-md" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Plus Button for Inactive Items */}
                    {!isActive && (
                      <button
                        onClick={() => handleServiceClick(idx)}
                        className="w-6 h-6 text-orange-500 flex items-center justify-center shrink-0 hover:scale-110 transition-transform cursor-pointer"
                        aria-label={`Expand ${service.title}`}
                      >
                        <Plus className="w-full h-full" />
                      </button>
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
                            className="text-orange-500 font-semibold text-sm p-0 h-auto hover:bg-transparent hover:gap-3 transition-all flex items-center gap-2"
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

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Top Left */}
              <Card
                className={`relative border-none w-full h-96 rounded-lg overflow-hidden transition-all ${
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
                className={`relative border-none w-full h-48 rounded-lg overflow-hidden transition-all ${
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
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Top Right */}
              <Card
                className={`relative border-none w-full h-48 rounded-lg overflow-hidden transition-all ${
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

              {/* Bottom Right */}
              <Card
                className={`relative border-none w-full h-96 rounded-lg overflow-hidden transition-all ${
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
