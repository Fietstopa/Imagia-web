import React, { useState } from "react";
import IconLoader from "@/components/iconLoader";
import sal1 from "../../public/images/interior/2.jpg";
import sal2 from "../../public/images/room1/1.jpg";

const ReservationPage = () => {
  /* ----------------------------- STATE -------------------------------- */
  const [selectedStudio, setSelectedStudio] = useState<1 | 2 | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | null>(
    null
  );

  /* ----------------------------- PRICES ------------------------------- */
  // Hotovostní ceník – Sál 1
  const studio1CashPrices = [
    { hours: 1, price: "1 000 Kč" },
    { hours: 2, price: "1 800 Kč" }, // 900 Kč/h
    { hours: 3, price: "2 400 Kč" }, // 800 Kč/h
    { hours: 4, price: "3 200 Kč" }, // 700 Kč/h
    { hours: 5, price: "4 000 Kč" },
    { hours: 6, price: "4 800 Kč" },
    { hours: 7, price: "5 600 Kč" },
    { hours: 8, price: "6 400 Kč" },
  ];

  // Hotovostní ceník – Sál 2
  const studio2CashPrices = [
    { hours: 1, price: "1 400 Kč" },
    { hours: 2, price: "2 800 Kč" },
    { hours: 3, price: "3 900 Kč" },
    { hours: 4, price: "5 200 Kč" },
    { hours: 5, price: "6 500 Kč" },
    { hours: 6, price: "7 800 Kč" },
    { hours: 7, price: "9 100 Kč" },
    { hours: 8, price: "10 400 Kč" },
  ];

  // Kartové ceníky – identické s hotovostními podle zadání
  const studio1CardPrices = [...studio1CashPrices];
  const studio2CardPrices = [...studio2CashPrices];

  /* ------------------------- HANDLERS --------------------------------- */
  const handleHourClick = (hours: number) => {
    let url = "";

    if (selectedStudio === 1) {
      if (paymentMethod === "card") {
        url = `https://cal.com/fotoatelier-imagia/rezervace-${hours}h-platebni-karta`;
      } else {
        url = `https://cal.com/fotoatelier-imagia/rezervace-${hours}h-sal-1-hotovost`;
      }
    } else if (selectedStudio === 2) {
      const paymentSegment =
        paymentMethod === "card" ? "platebni-karta" : "hotovost";
      url = `https://cal.com/fotoatelier-imagia/rezervace-${hours}h-sal-2-${paymentSegment}?overlayCalendar=true`;
    }

    if (url) window.location.href = url;
  };

  /* ----------------------------- RENDER ------------------------------- */
  return (
    <div className="pt-30 bg-black flex flex-col items-center min-h-screen text-white">
      {/* -------------------- VÝBĚR SÁLU -------------------------------- */}
      {!selectedStudio && (
        <div className="text-center my-10 w-full">
          <h2 className="md:text-7xl text-4xl pb-15 font-[Literata]">
            Vyberte sál:
          </h2>
          <div className="flex flex-col md:flex-row gap-10 m-auto justify-center items-center px-4 max-w-4xl">
            {/* --- Sál 1 -------------------------------------------------- */}
            <button
              onClick={() => setSelectedStudio(1)}
              className="bg-[#1a1a1a] border border-[#C7AC81]/50 hover:bg-[#2a2a2a] transition-all overflow-hidden shadow-lg w-full max-w-sm relative"
            >
              {/* Badge */}

              <div className="h-48 overflow-hidden relative">
                <img
                  src={sal1}
                  alt="Sál Arch Deco"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#C7AC81] mb-2">
                  Sál Arch Deco
                </h3>
                <p className="text-gray-300">
                  Elegantní prostor se stylovým designem, moderním nábytkem a
                  papírovými pozadí
                  <br /> <br /> <br />
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[#C7AC81] font-bold text-xl">
                    1000 Kč/h
                  </span>
                </div>
              </div>
            </button>

            {/* --- Sál 2 -------------------------------------------------- */}
            <button
              onClick={() => setSelectedStudio(2)}
              className="bg-[#1a1a1a] relative border border-[#C7AC81]/50 hover:bg-[#2a2a2a] transition-all overflow-hidden shadow-lg w-full max-w-sm"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={sal2}
                  alt="Sál Aurora"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#C7AC81] mb-2">
                  Sál Aurora
                </h3>
                <p className="text-gray-300">
                  Tenhle sál je opravdu perla našeho studia. Jedinečná lehkost a
                  modernost interiéru dodají každému vašemu záběru nádech
                  elegance.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[#C7AC81] font-bold text-xl">
                    1400 Kč/h
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ------------------ VÝBĚR PLATBY -------------------------------- */}
      {selectedStudio && !paymentMethod && (
        <div className="text-center my-16">
          <h2 className="md:text-5xl text-3xl pb-10 font-[Literata] text-[#C7AC81]">
            Vyberte způsob platby
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
            {/* --- Platební karta --------------------------------------- */}
            <button
              onClick={() => setPaymentMethod("card")}
              className="group relative bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#C7AC81]/30 hover:border-[#C7AC81]/50 p-8 w-full max-w-xs transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-[#C7AC81]/10 rounded-full group-hover:bg-[#C7AC81]/20 transition-colors">
                  <IconLoader
                    link="/card.svg"
                    styles="w-12 h-12 text-[#C7AC81]"
                  />
                </div>
                <span className="text-xl font-medium text-white">
                  Platební karta
                </span>
                <span className="mt-2 text-sm text-gray-400">
                  Online platba kartou
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-[#C7AC81]/0 group-hover:border-[#C7AC81]/20 pointer-events-none transition-all duration-300" />
            </button>

            {/* --- Hotovost --------------------------------------------- */}
            <button
              onClick={() => setPaymentMethod("cash")}
              className="group relative bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#C7AC81]/30 hover:border-[#C7AC81]/50 p-8 w-full max-w-xs transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-[#C7AC81]/10 rounded-full group-hover:bg-[#C7AC81]/20 transition-colors">
                  <IconLoader
                    link="/cash.svg"
                    styles="w-12 h-12 text-[#C7AC81]"
                  />
                </div>
                <span className="text-xl font-medium text-white">Hotovost</span>
                <span className="mt-2 text-sm text-gray-400">
                  Platba na místě
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-[#C7AC81]/0 group-hover:border-[#C7AC81]/20 rounded-xl pointer-events-none transition-all duration-300" />
            </button>
          </div>
        </div>
      )}

      {/* --------------- VÝBĚR DÉLKY REZERVACE --------------------------- */}
      {selectedStudio && paymentMethod && (
        <div className="mt-8 w-full px-4 flex flex-col items-center gap-8 max-w-2xl">
          <h2 className="md:text-5xl text-3xl font-[Literata] text-center text-[#C7AC81]">
            Vyberte délku rezervace
            <span className="block text-xl text-gray-400 mt-2">
              {paymentMethod === "card" ? "Platba kartou" : "Platba hotově"}
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {(paymentMethod === "card"
              ? selectedStudio === 1
                ? studio1CardPrices
                : studio2CardPrices
              : selectedStudio === 1
              ? studio1CashPrices
              : studio2CashPrices
            ).map(({ hours, price }) => (
              <button
                key={hours}
                onClick={() => handleHourClick(hours)}
                className="group relative bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#C7AC81]/30 hover:border-[#C7AC81]/60 rounded-lg p-4 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="text-2xl font-medium text-white block">
                  {hours} h
                </span>
                <span className="text-[#C7AC81] text-sm">{price}</span>
                <div className="absolute inset-0 border-2 border-[#C7AC81]/0 group-hover:border-[#C7AC81]/20 rounded-lg pointer-events-none transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
