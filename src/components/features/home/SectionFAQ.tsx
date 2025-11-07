"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SectionFAQ = () => {
  const faqs = [
    {
      q: "Can VisionLab handle all brands of LED and LCD screens?",
      a: (
        <>
          <span className="text-orange-500">Yes,</span> we can handle various
          brands and models of screens from various manufacturers. Our team of
          technicians is equipped with calibration tools and replacement modules
          that are compatible with well-known brands in the Indonesian and
          global markets.
        </>
      ),
    },
    {
      q: "Does VisionLab provide pickup and delivery services?",
      a: (
        <>
          <span className="text-orange-500">Yes,</span> we provide pickup and
          delivery services for your convenience. Please contact our team for
          more details about service coverage.
        </>
      ),
    },
    {
      q: "Where is VisionLab located and what areas does it serve?",
      a: "VisionLab is based in Jakarta and serves more than 15 cities throughout Indonesia. We can reach your location for maintenance and repair services.",
    },
    {
      q: "Is there a warranty after repair?",
      a: (
        <>
          <span className="text-orange-500">Yes,</span> all our repairs come
          with a warranty period. The warranty duration depends on the type of
          service and components replaced.
        </>
      ),
    },
  ];

  return (
    <section className="py-10 md:py-16 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          FAQ
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          We understand that every screen has different needs. That&apos;s why
          VisionLab has compiled a list of frequently asked questions so you can
          get complete clarity about our services, processes, costs, and
          guarantees without having to ask twice.
        </p>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-6"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white rounded-lg border-none overflow-hidden"
            >
              <AccordionTrigger className="text-sm md:text-base px-6 py-4 text-left text-gray-600 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base px-6 bg-[#FAFAFA] text-gray-600">
                <p className="md:w-1/2">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectionFAQ;
