import React, { useState } from "react";
import IconLoader from "@/components/iconLoader";

const ReservationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | null>(
    null
  );

  const handleHourClick = (hours: number) => {
    const url =
      paymentMethod === "card"
        ? `https://cal.com/fotoatelier-imagia/rezervace-${hours}h-platebni-karta`
        : `https://cal.com/fotoatelier-imagia/rezervace-${hours}h-sal-1-hotovost`;

    window.location.href = url;
  };

  return (
    <div className="pt-30 bg-black flex flex-col items-center min-h-screen text-white">
      {/* Payment method selection */}
      {paymentMethod === null && (
        <div className="text-center my-10">
          <h2 className="md:text-7xl text-4xl pb-15 font-[Literata]">
            Vyberte způsob platby:
          </h2>
          <div className="flex flex-col md:flex-row gap-y-5 m-auto justify-around items-center">
            <button
              onClick={() => setPaymentMethod("card")}
              className="bg-[#C7AC81] text-lg px-15 py-5 flex flex-col items-center justify-center m-2"
            >
              <IconLoader link="/card.svg" styles="w-10 h-10" />
              Karta
            </button>
            <button
              onClick={() => setPaymentMethod("cash")}
              className="bg-[#C7AC81] text-lg px-15 py-5 flex flex-col items-center justify-center m-2"
            >
              <IconLoader link="/cash.svg" styles="w-10 h-10" />
              Hotovost
            </button>
          </div>
        </div>
      )}

      {/* Hour selection */}
      {paymentMethod !== null && (
        <div className="mt-8 w-full px-4 flex flex-col items-center gap-4">
          <h2 className="md:text-7xl text-4xl font-[Literata] text-center">
            Vyberte délku rezervace (
            {paymentMethod === "card" ? "kartou" : "hotovost"}):
          </h2>
          <div className="flex flex-col py-15 items-center gap-5 w-full">
            {paymentMethod === "card" ? (
              // Card payment buttons
              [1, 2, 3, 4, 5, 6, 7, 8].map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleHourClick(hour)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  {hour} h
                </button>
              ))
            ) : (
              // Cash payment buttons with prices
              <>
                <button
                  key={1}
                  onClick={() => handleHourClick(1)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  1 hodina - 1 300 Kč
                </button>
                <button
                  key={2}
                  onClick={() => handleHourClick(2)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  2 hodiny - 2 550 Kč
                </button>
                <button
                  key={3}
                  onClick={() => handleHourClick(3)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  3 hodiny - 3 750 Kč
                </button>
                <button
                  key={4}
                  onClick={() => handleHourClick(4)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  4 hodiny - 4 900 Kč
                </button>
                <button
                  key={5}
                  onClick={() => handleHourClick(5)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  5 hodin - 6 000 Kč
                </button>
                <button
                  key={6}
                  onClick={() => handleHourClick(6)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  6 hodin - 7 050 Kč
                </button>
                <button
                  key={7}
                  onClick={() => handleHourClick(7)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  7 hodin - 8 050 Kč
                </button>
                <button
                  key={8}
                  onClick={() => handleHourClick(8)}
                  className="bg-[#C7AC81] text-lg w-full md:w-1/2 py-3 cursor-pointer mx-auto"
                >
                  8 hodin - 8 400 Kč
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
