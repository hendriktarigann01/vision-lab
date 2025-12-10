"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

const PromoModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("promo");

  useEffect(() => {
    const hasSeenPromo = localStorage.getItem("hasSeenPromo");
    const lastSeen = localStorage.getItem("promoLastSeen");
    const now = Date.now();
    const halfDayInMs = 12 * 60 * 60 * 1000;

    const shouldShow =
      !hasSeenPromo || (lastSeen && now - parseInt(lastSeen) > halfDayInMs);

    if (shouldShow) {
      setTimeout(() => setIsModalOpen(true), 1500);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("hasSeenPromo", "true");
    localStorage.setItem("promoLastSeen", Date.now().toString());
  };

  if (!isModalOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={handleCloseModal}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 lg:top-4 lg:left-4 w-10 h-10 bg-[#FF6B2C] hover:bg-[#FF5A1A] rounded-full flex items-center justify-center transition-colors z-10"
                aria-label={t("close")}
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="my-8 lg:my-6 text-center space-y-10 lg:space-y-6">
                <div className="space-y-3">
                  <p className="text-gray-600 text-xs uppercase tracking-wide">
                    {t("label")}
                  </p>
                  <p className="text-4xl md:text-5xl font-semibold text-gray-700">
                    {t("discount")}
                  </p>
                  <p className="text-gray-600 text-sm">{t("description")}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t("extraBenefits.title")}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex mx-0">
                      <div className="flex gap-2 items-center text-center mx-auto">
                        <div className="w-5 h-5 rounded-full bg-[#43A047] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700 text-sm">
                          {t("extraBenefits.pricing")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t("inspection.title")}
                  </h3>

                  <div>
                    <p className="text-gray-600 text-sm">
                      {t("inspection.validity")}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t("inspection.area")}
                    </p>
                  </div>

                  <Link
                    href={`https://wa.me/628111122492?text=${encodeURIComponent(
                      t("whatsappMessage")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-[#FF6B2C] hover:bg-[#FF5A1A] cursor-pointer w-full h-12 rounded-md mt-6 text-white font-semibold"
                    >
                      {t("cta")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image - Hidden on Mobile */}
            <div className="hidden lg:block relative h-full min-h-[500px]">
              <Image
                src="/promo-img.webp"
                alt="Technician working on LED screen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoModal;
