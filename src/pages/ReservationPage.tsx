import React, { useState, useEffect } from "react";
import IconLoader from "@/components/iconLoader";

const ReservationPage = () => {
  // Stores whether the user has selected "cash" or "card"
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | null>(
    null
  );

  // When cash is selected, immediately redirect to the cash reservation link
  useEffect(() => {
    if (paymentMethod === "cash") {
      window.location.href =
        "https://cal.com/fotoatelier-imagia/rezervace-hotovost";
    }
  }, [paymentMethod]);

  // For card, clicking a button will redirect to the corresponding link
  const handleCardClick = (hours: number) => {
    const url = `https://cal.com/fotoatelier-imagia/rezervace-${hours}h-platebni-karta`;
    window.location.href = url;
  };

  return (
    <div className="pt-30 bg-black flex flex-col items-center min-h-screen text-white">
      {/* If no payment method is selected, display the choice buttons */}
      {paymentMethod === null && (
        <div className="text-center my-10">
          <h2 className="md:text-7xl text-4xl pb-15 font-[Literata] mb-4">
            Vyberte způsob platby:
          </h2>
          <div className="flex flex-col md:flex-row gap-y-5 m-auto justify-around items-center">
            <button
              onClick={() => setPaymentMethod("card")}
              className="bg-[#C7AC81] text-lg px-15 py-5 flex flex-col items-center justify-center m-2"
            >
              <IconLoader link="/card.svg" styles="w-10 h-10" />
              Card
            </button>
            <button
              onClick={() => setPaymentMethod("cash")}
              className="bg-[#C7AC81] text-lg px-15 py-5 flex flex-col items-center justify-center m-2"
            >
              <IconLoader link="/cash.svg" styles="w-10 h-10" />
              Cash
            </button>
          </div>
        </div>
      )}

      {/* If the user selected card, show eight buttons for reservation duration */}
      {paymentMethod === "card" && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <h2 className="md:text-7xl text-4xl pb-15 font-[Literata] mb-4 text-center">
            Vyberte délku rezervace:
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((hour) => (
              <button
                key={hour}
                onClick={() => handleCardClick(hour)}
                className="bg-[#C7AC81] text-lg px-10 py-5 cursor-pointer"
              >
                {hour}h
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
