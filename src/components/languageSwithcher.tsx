import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "cs", label: "Čeština" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "ua", label: "Українська" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="z-[999] relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-black text-white shadow"
      >
        {languages.find((l) => l.code === i18n.language)?.label || "Jazyk"}
      </button>

      {isOpen && (
        <div className="absolute left-0 md:bg-black bg-[#c7ac81] shadow z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`px-4 py-2 cursor-pointer hover:bg-[#c7ac81] ${
                i18n.language === lang.code ? "font-bold" : ""
              }`}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
