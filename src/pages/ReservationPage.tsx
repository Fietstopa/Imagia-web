import { useState } from "react";
import ReservationCard from "../components/Reservation/ReservationCard";
import ReservationCash from "../components/Reservation/ReservationCash";
import IconLoader from "@/components/iconLoader";
const ReservationPage = () => {
  // Ukládáme, zda uživatel zvolil hotovost nebo kartu
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | null>(
    null
  );

  return (
    <div className="pt-30 bg-black flex flex-col items-center min-h-screen">
      {/* 1) Dokud uživatel nevybere způsob platby, ukazujeme tlačítka */}
      {paymentMethod === null && (
        <div className="text-white my-10">
          <h2 className="text-7xl pb-15 font-[Literata] mb-4">
            Vyberte způsob platby:
          </h2>
          <div className="flex justify-around">
            <div>
              <button
                onClick={() => setPaymentMethod("card")}
                className="bg-[#C7AC81] text-lg px-15 py-5"
              >
                <IconLoader link="/card.svg" styles="w-10 h-10" />
                Card
              </button>
            </div>
            <div>
              <ReservationCash
                label="Cash"
                style="bg-[#C7AC81] text-lg px-15 py-5"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2) Pokud vybere CASH (zatím jen placeholder) */}
      {paymentMethod === "cash" && (
        <div className="mt-8 text-white">
          <p>Zvolili jste platbu v hotovosti.</p>
          {/* Tady může být další logika pro rezervaci placenou hotově */}
        </div>
      )}

      {/* 3) Pokud zvolil CARD, rovnou vykreslíme 8× ReservationCard */}
      {paymentMethod === "card" && (
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Pro každou možnou délku 1 až 8 hodin vytvoříme samostatnou kartu */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((hour) => (
            <ReservationCard
              key={hour}
              label={`${hour}h`}
              hours={hour}
              style="text-white bg-[#C7AC81] px-15 py-2 cursor-pointer"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
