"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MoveDown, MoveUp, Plus } from "lucide-react";
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

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="service" className="py-16 px-4 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl">
        <h2 className="flex w-xl items-start text-left justify-start text-3xl md:text-4xl text-gray-900 mb-12">
          Complete services for all repair and maintenance needs
        </h2>
      </div>
      <div
        className="max-w-6xl mx-auto bg-[#AFAFAF33]/20 p-10 rounded-2xl"
        style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}
      >
        <div className="grid md:grid-cols-2 gap-20 mt-8">
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
                    className="mb-4 p-4 bg-[#AFAFAF33]/20 rounded-lg cursor-pointer"
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
          <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-col gap-1">
              {/* Top Left */}
              <Card
                className={`relative border-none w-48 h-80 rounded-lg overflow-hidden transition-all ${
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
                className={`relative border-none w-48 h-36 rounded-lg overflow-hidden transition-all ${
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

            <div className="flex flex-col gap-1">
              {/* Top Right */}
              <Card
                className={`relative border-none w-48 h-36 rounded-lg overflow-hidden transition-all ${
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
                className={`relative border-none w-48 h-80 rounded-lg overflow-hidden transition-all ${
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
