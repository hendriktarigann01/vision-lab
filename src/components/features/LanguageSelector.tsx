"use client";
import Image from "next/image";
import React, { useTransition, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { localeNames, localeFlags, type Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (newLocale: Locale): void => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only close when scrolling down
      if (currentScrollY > lastScrollY) {
        setIsOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="w-24">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            className="flex items-center gap-2 px-3 py-2 w-full"
            disabled={isPending}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
                <Image
                  src={localeFlags[locale]}
                  alt={localeNames[locale]}
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-gray-700 uppercase text-sm">{locale}</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform ${
                isPending ? "opacity-50" : ""
              }`}
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="w-36 bg-white rounded-xl space-y-2 p-2"
        >
          {routing.locales.map((lang) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                locale === lang ? "bg-brand-50/20 border border-brand-200" : ""
              }`}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <Image
                  src={localeFlags[lang]}
                  alt={localeNames[lang]}
                  className="w-full h-full"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs">{localeNames[lang]}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
