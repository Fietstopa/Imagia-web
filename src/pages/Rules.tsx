import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface StudioRule {
  title: string;
  content: string;
}

const Rules: React.FC = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number): void => {
    setOpenSection(openSection === index ? null : index);
  };

  // Create rules array from translations
  const studioRules: StudioRule[] = [
    {
      title: t("rules.title1"),
      content: t("rules.content1"),
    },
    {
      title: t("rules.title2"),
      content: t("rules.content2"),
    },
    {
      title: t("rules.title3"),
      content: t("rules.content3"),
    },
    {
      title: t("rules.title4"),
      content: t("rules.content4"),
    },
    {
      title: t("rules.title5"),
      content: t("rules.content5"),
    },
    {
      title: t("rules.title6"),
      content: t("rules.content6"),
    },
    {
      title: t("rules.title7"),
      content: t("rules.content7"),
    },
  ];

  return (
    <div className="max-w-6xl font-[Montserrat] mx-auto p-6 mt-40">
      <header className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {t("navbar.rules")}
        </h1>
      </header>

      {studioRules.map((rule, index) => (
        <div
          key={index}
          className="border-t-1 border-gray-100 bg-white overflow-hidden"
        >
          <button
            className="w-full text-left px-4 py-5 hover:bg-gray-300 text-lg flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <span className="font-semibold text-gray-800">{rule.title}</span>
            <span className="text-gray-600">
              {openSection === index ? "▼" : "▶"}
            </span>
          </button>

          {openSection === index && (
            <div className="p-4 border-t text-lg border-gray-300 bg-gray-50">
              {rule.content.split("\n").map((line, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-[#777777] text-base mb-1"
                >
                  {line.trim()}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rules;
