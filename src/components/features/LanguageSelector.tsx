import Image from "next/image";
import React, { useState } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const languages: Language[] = [
    {
      code: "en",
      name: "English",
      flag: "/icons/icon-united-kingdom.png",
    },
    {
      code: "id",
      name: "Indonesia",
      flag: "/icons/icon-indonesia.png",
    },
  ];

  const selectedLang = languages.find(
    (lang) => lang.code === selectedLanguage
  )!;

  const handleSelect = (code: string): void => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-48">
      {/* Button Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between space-x-3 px-3 py-2"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <Image
              src={selectedLang.flag}
              alt={selectedLang.name}
              className="w-full h-full object-cover"
              width={32}
              height={32}
            />
          </div>
          <span className="font-medium text-gray-700 uppercase text-sm">
            {selectedLang.code}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-4 transition-all ${
                selectedLanguage === lang.code
                  ? "bg-blue-50 border-2"
                  : index === languages.length - 1
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                />
              </div>
              <span
                className={`font-semibold text-lg ${
                  index === languages.length - 1
                    ? "text-white"
                    : "text-gray-800"
                }`}
              >
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
