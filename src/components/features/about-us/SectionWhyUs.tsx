"use client";
import React from "react";

const SectionWhyUs = () => {
  const reasons = [
    {
      number: "1",
      title: "Official Service Warranty",
      description:
        "Every service is covered by an official warranty to ensure quality and customer trust.",
      position: "top-left",
    },
    {
      number: "2",
      title: "Certified Technicians",
      description:
        "Handled by professional technicians with verified certifications and proven expertise.",
      position: "top-right",
    },
    {
      number: "3",
      title: "Fast & Flexible Response",
      description:
        "We provide quick assistance and adjust our service schedule to fit your needs.",
      position: "bottom-left",
    },
    {
      number: "4",
      title: "Nationwide Support",
      description:
        "Our services are available across Indonesia, giving you reliable support wherever you are.",
      position: "bottom-right",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:block relative py-20">
          {/* Grid for positioning items */}
          <div className="grid grid-cols-2 gap-x-[600px] gap-y-[400px] relative">
            {/* Top Left */}
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium mb-4">
                1
              </div>
              <h3 className="text-xl font-normal text-gray-900 border-l-4 border-brand-200 pl-3 mb-3">
                Official Service Warranty
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Every service is covered by an official warranty to ensure
                quality and customer trust.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium mb-4">
                2
              </div>
              <h3 className="text-xl font-normal text-gray-900 border-l-4 border-brand-200 pl-3 mb-3">
                Certified Technicians
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Handled by professional technicians with verified certifications
                and proven expertise.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium mb-4">
                3
              </div>
              <h3 className="text-xl font-normal text-gray-900 border-l-4 border-brand-200 pl-3 mb-3">
                Fast & Flexible Response
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We provide quick assistance and adjust our service schedule to
                fit your needs.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium mb-4">
                4
              </div>
              <h3 className="text-xl font-normal text-gray-900 border-l-4 border-brand-200 pl-3 mb-3">
                Nationwide Support
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Our services are available across Indonesia, giving you reliable
                support wherever you are.
              </p>
            </div>
          </div>

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-brand-200 rounded-full flex items-center justify-center z-10">
            <h2 className="text-2xl font-normal text-white">Why Choose Us</h2>
          </div>

          {/* Dashed Lines Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/5 pointer-events-none">
            {/* Dash 1 - Left vertical top */}
            <div className="absolute left-0 top-0 h-[calc(50%)] border-l-3 border-dashed border-brand-50"></div>

            {/* Dash 2 - Left vertical bottom */}
            <div className="absolute left-0 bottom-0 h-[calc(50%)] border-l-3 border-dashed border-brand-50"></div>

            {/* Dash 3 - Right vertical top */}
            <div className="absolute right-0 top-0 h-[calc(50%)] border-r-3 border-dashed border-brand-50"></div>

            {/* Dash 4 - Right vertical bottom */}
            <div className="absolute right-0 bottom-0 h-[calc(50%)] border-r-3 border-dashed border-brand-50"></div>

            {/* Horizontal left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%)] border-t-3 border-dashed border-brand-50"></div>

            {/* Horizontal right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%)] border-t-3 border-dashed border-brand-50"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative py-20">
          {/* Grid for positioning items */}
          <div className="grid grid-cols-2 gap-x-32 gap-y-32 relative px-4">
            {/* Top Left */}
            <div className="flex flex-col items-start">
              <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium text-sm mb-3">
                1
              </div>
              <h3 className="text-sm font-normal text-gray-900 border-l-2 border-brand-200 pl-2 mb-2">
                Official Service Warranty
              </h3>
              <p className="text-xs text-gray-600 leading-normal">
                Every service is covered by an official warranty to ensure
                quality and customer trust.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-start">
              <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium text-sm mb-3">
                2
              </div>
              <h3 className="text-sm font-normal text-gray-900 border-l-2 border-brand-200 pl-2 mb-2">
                Certified Technicians
              </h3>
              <p className="text-xs text-gray-600 leading-normal">
                Handled by professional technicians with verified certifications
                and proven expertise.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-start">
              <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium text-sm mb-3">
                3
              </div>
              <h3 className="text-sm font-normal text-gray-900 border-l-2 border-brand-200 pl-2 mb-2">
                Fast & Flexible Response
              </h3>
              <p className="text-xs text-gray-600 leading-normal">
                We provide quick assistance and adjust our service schedule to
                fit your needs.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-start">
              <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center text-orange-600 font-medium text-sm mb-3">
                4
              </div>
              <h3 className="text-sm font-normal text-gray-900 border-l-2 border-brand-200 pl-2 mb-2">
                Nationwide Support
              </h3>
              <p className="text-xs text-gray-600 leading-normal">
                Our services are available across Indonesia, giving you reliable
                support wherever you are.
              </p>
            </div>
          </div>

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-200 rounded-full flex items-center justify-center z-10">
            <h2 className="text-sm font-normal text-white text-center px-2">
              Why Choose Us
            </h2>
          </div>

          {/* Dashed Lines Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3/5 h-1/6 -translate-y-1/2 pointer-events-none">
            {/* Dash 1 - Left vertical top */}
            <div className="absolute left-0 top-0 h-[calc(50%)] border-l-2 border-dashed border-brand-200"></div>

            {/* Dash 2 - Left vertical bottom */}
            <div className="absolute left-0 bottom-0 h-[calc(50%)] border-l-2 border-dashed border-brand-200"></div>

            {/* Dash 3 - Right vertical top */}
            <div className="absolute right-0 top-0 h-[calc(50%)] border-r-2 border-dashed border-brand-200"></div>

            {/* Dash 4 - Right vertical bottom */}
            <div className="absolute right-0 bottom-0 h-[calc(50%)] border-r-2 border-dashed border-brand-200"></div>

            {/* Horizontal left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%)] border-t-2 border-dashed border-brand-200"></div>

            {/* Horizontal right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%)] border-t-2 border-dashed border-brand-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyUs;
