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
      a: "Yes, we can handle various brands and models of screens from various manufacturers. Our team of technicians is equipped with calibration tools and replacement modules that are compatible with well-known brands in the Indonesian and global markets.",
    },
    {
      q: "Does VisionLab provide pickup and delivery services?",
      a: "Yes, we provide pickup and delivery services for your convenience. Please contact our team for more details about service coverage.",
    },
    {
      q: "Where is VisionLab located and what areas does it serve?",
      a: "VisionLab is based in Jakarta and serves more than 15 cities throughout Indonesia. We can reach your location for maintenance and repair services.",
    },
    {
      q: "Is there a warranty after repair?",
      a: "Yes, all our repairs come with a warranty period. The warranty duration depends on the type of service and components replaced.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          FAQ
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We understand that every screen has different needs. That&apos;s why
          VisionLab has compiled a list of frequently asked questions so you can
          get complete clarity about our services, processes, costs, and
          guarantees without having to ask twice.
        </p>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white rounded-lg border-none shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold text-gray-900 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectionFAQ;
