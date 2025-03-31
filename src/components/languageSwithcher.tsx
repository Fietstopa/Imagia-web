import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const languages = [
    { code: "cs", label: "Čeština" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "ua", label: "Українська" },
  ];

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsHovered(false);
  };

  return (
    // Přidáním "pb-10" (padding-bottom) rozšiřujeme oblast, aby zahrnovala i dropdown
    <div
      className="relative inline-block text-left "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="px-4 py-2 bg-black text-white  shadow">
        {languages.find((l) => l.code === i18n.language)?.label || "Jazyk"}
      </button>

      {isHovered && (
        <div className="absolute left-0  bg-black   shadow z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`px-4 py-2 cursor-pointer hover:bg-[#c7ac81] ${
                i18n.language === lang.code ? "font-bold " : ""
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
