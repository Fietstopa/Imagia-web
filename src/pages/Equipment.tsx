import CustomCaption from "@/components/CustomCaption";
import React from "react";

const EquipmentGallery = () => {
  const equipmentItems = [
    {
      id: 1,
      name: "Profesionální fotoaparát",
      description:
        "Full-frame snímač s vysokým rozlišením pro dokonalé detaily",
    },
    {
      id: 2,
      name: "Objektiv 24-70mm",
      description: "Univerzální zoom s výbornou světelností f/2.8",
    },
    {
      id: 3,
      name: "Objektiv 70-200mm",
      description: "Teleobjektiv ideální pro portréty a detailní záběry",
    },
    {
      id: 4,
      name: "Makro objektiv",
      description: "Speciální čočky pro dokonalé makro fotografie",
    },
    {
      id: 5,
      name: "Studiové světlo",
      description: "Výkonné LED světlo s regulací teploty barev",
    },
    {
      id: 6,
      name: "Odrazná deska",
      description: "Profesionální odrazka pro měkké vyplnění stínů",
    },
    {
      id: 7,
      name: "Stativ Manfrotto",
      description: "Stabilní stativ s plynulou hlavou pro precizní kompozice",
    },
    {
      id: 8,
      name: "Dron DJI Mavic",
      description: "Profesionální dron pro unikátní letecké záběry",
    },
    {
      id: 9,
      name: "Gimbal stabilizátor",
      description: "Elektronická stabilizace pro plynulé pohybové záběry",
    },
    {
      id: 10,
      name: "Fotografický set",
      description: "Kompletní sada příslušenství pro profesionální práci",
    },
    {
      id: 11,
      name: "Bateriový grip",
      description: "Prodloužená výdrž pro náročné focení",
    },
    {
      id: 12,
      name: "Externí blesk",
      description: "Výkonný systémový blesk s rychlým dobíjením",
    },
    {
      id: 13,
      name: "Softbox",
      description: "Velký difuzér pro měkké a přirozené světlo",
    },
    {
      id: 14,
      name: "Filtrový set",
      description: "Kvalitní ND a polarizační filtry pro kreativní efekty",
    },
    {
      id: 15,
      name: "Fotografický batoh",
      description: "Ergonomické řešení pro bezpečný transport techniky",
    },
    {
      id: 16,
      name: "Monitor kalibrátor",
      description: "Přesné zobrazení barev pro profesionální úpravy",
    },
    {
      id: 17,
      name: "Bezdrátový trigger",
      description: "Dálkové ovládání pro kreativní sestavy",
    },
    {
      id: 18,
      name: "Green screen",
      description: "Profesionální pozadí pro počítačové efekty",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <CustomCaption
        title="Nase"
        subtitle="Vybaveni"
        classProps=""
      ></CustomCaption>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {equipmentItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#C8AD81]"
          >
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <img
                src={`/images/equipment/${item.id}.jpeg`}
                alt={item.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/equipment/default.jpg";
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-center mb-2">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentGallery;
