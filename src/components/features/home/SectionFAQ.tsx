"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const SectionFAQ = () => {
  const t = useTranslations("faq");

  const faqs = [
    {
      q: t("questions.brands.question"),
      a: (
        <>
          <span className="text-brand-200">
            {t("questions.brands.answerPrefix")}
          </span>{" "}
          {t("questions.brands.answer")}
        </>
      ),
    },
    {
      q: t("questions.pickupDelivery.question"),
      a: (
        <>
          <span className="text-brand-200">
            {t("questions.pickupDelivery.answerPrefix")}
          </span>{" "}
          {t("questions.pickupDelivery.answer")}
        </>
      ),
    },
    {
      q: t("questions.location.question"),
      a: t("questions.location.answer"),
    },
    {
      q: t("questions.warranty.question"),
      a: (
        <>
          <span className="text-brand-200">
            {t("questions.warranty.answerPrefix")}
          </span>{" "}
          {t("questions.warranty.answer")}
        </>
      ),
    },
  ];

  return (
    <section className="py-10 md:py-16 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          {t("description")}
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
