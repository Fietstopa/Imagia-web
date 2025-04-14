import React, { useState } from "react";

interface StudioRule {
  title: string;
  content: string;
}
const studioRules: StudioRule[] = [
  {
    title: "Délka pronájmu",
    content: `
      - Ve studiu platí koncept "studijní hodiny"
      - Při rezervaci 60 minut máte k dispozici 55 minut
      - Zbylých 5 minut je vyhrazeno pro úklid a přípravu
      - Klient musí seznámit všechny účastníky s pravidly
    `,
  },
  {
    title: "Rezervace a storno",
    content: `
      - Rezervace po uhrazení 100% zálohy
      - Storno bez ztráty zálohy 48 hodin předem
      - Storno 24 hodin předem: 50% poplatek
      - Storno méně než 24 hodin předem: propadá celá záloha
      - Přesun rezervace možný 48 hodin předem
      - Opakovaný přesun: 50% poplatek z ceny pronájmu
    `,
  },
  {
    title: "Provozní pravidla",
    content: `
      - Maximálně 6 osob ve studiu (více osob po domluvě +300 Kč/osoba)
      - Povinná čistá výměnná obuv
      - Zákaz otevřeného ohně (pokuta 3000 Kč)
      - Zákaz dýmovnic a bengálských ohňů
      - Dekorativní svíčky pouze s dozorem administrátora
      - Zákaz pornografického obsahu (pokuta 50 000 Kč)
      - Zákaz alkoholu a podnapilého stavu
      - Zákaz pořádání oslav a akcí
    `,
  },
  {
    title: "Úklid a odpovědnost",
    content: `
      - Studio předávat v původním stavu
      - Klient odpovídá za čistotu a stav vybavení
      - Poškození majetku hradí klient
      - Poplatek za znečištění papírových pozadí: 300 Kč/metr
      
    `,
  },
  {
    title: "Speciální případy",
    content: `
      - Focení s jídlem/zvířaty po domluvě
      - Pro zvířata: vlastní deky a podložky
      - Použití sypkých materiálů (mouka, konfety) nutno nahlásit
      - Změna barev pozadí po domluvě s administrátorem
      - Příplatek za speciální úklid: 300 Kč nebo 20 minut z času focení
    `,
  },
  {
    title: "Technické požadavky",
    content: `
      - Poškození vybavení bude vyčísleno administrátorem
      - Potřeby studiového vybavení řešit s administrátorem
      - Zákaz technických zásahů do vybavení studia
    `,
  },
  {
    title: "Bezpečnostní pravidla",
    content: `
      - Zákaz nebezpečných materiálů bez dozoru
      - Povinnost hlásit úrazy a nehody
      - Zákaz manipulace s elektroinstalací
    `,
  },
];
const Rules: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number): void => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="max-w-6xl font-[Montserrat] mx-auto p-6 mt-40  ">
      <header className="text-center ">
        <h1 className="text-2xl font-bold text-gray-800">Pravidla</h1>
      </header>

      {studioRules.map((rule, index) => (
        <div
          key={index}
          className="border-t-1 border-gray-100 bg-white    overflow-hidden"
        >
          <button
            className="w-full text-left px-4 py-5 hover:bg-gray-300 text-lg flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <span className="font-semibold text-gray-800">{rule.title}</span>
            <span className="text-gray-600 ">
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
