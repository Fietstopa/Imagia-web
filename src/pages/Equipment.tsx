import CustomCaption from "@/components/CustomCaption";
import React from "react";

const EquipmentGallery = () => {
  const equipmentCategories = [
    {
      name: "Záblesková a trvalá světla",
      items: [
        { id: 15, name: "GODOX DP800III-V, 800ws 2x" },
        { id: 14, name: "GODOX SL-150III" },
        { id: 13, name: "Nan FS-300b LED Bi-color 2x" },
        { id: 1, name: "PAVOTUBE NANLITE T8-7X. 110 CM 2x" },
      ],
    },

    {
      name: "Světelné modifikátory",
      items: [
        { id: 2, name: "SOFTBOX-OCTABOX GODOX S VOŠTINOU 95CM 2x" },
        { id: 3, name: "SOFTBOX NANLITE 60X90 2x" },
        { id: 4, name: "BALÓNOVÝ SOFTBOX GODOX 65 CM" },
        { id: 5, name: "SOFTBOX-OCTABOX GODOX 95CM 2x" },
        { id: 12, name: "PROJEKČNÍ ADAPTÉR GODOX BLP, SADA GOBO FILTRŮ" },
      ],
    },
    {
      name: "Stativy",
      items: [
        { id: 6, name: "HEAVY TRIPOD 4,5M" },
        { id: 7, name: "JEŘÁBOVÝ STATIV BOOM 2,8M" },
        { id: 8, name: "STATIV STUDIOVÝ 2,8M 2x" },
      ],
    },
    {
      name: "Ostatní vybavení",
      items: [
        { id: 9, name: "Větrák 150W" },
        { id: 10, name: "RADIOVÁ ŘIDÍCÍ JEDNOTKA GODOX XT-16 (VYSÍLAČ)" },
        { id: 11, name: "SMOKE GENERATOR LED-500" },
        { id: 16, name: "Monitor kalibrátor" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <CustomCaption title="Naše" subtitle="Vybavení" classProps="" />

      {equipmentCategories.map((category) => (
        <div key={category.name} className="mb-16">
          <h1 className="my-8 text-3xl font-[Montserrat]">{category.name}</h1>

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#C8AD81]"
              >
                <div className="bg-gray-300  flex items-center justify-center">
                  <img
                    src={`/images/equipment/${item.id}.jpeg`}
                    alt={item.name}
                    className="h-64 w-full object-cover "
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
      ))}
    </div>
  );
};

export default EquipmentGallery;
