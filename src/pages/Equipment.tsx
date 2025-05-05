import CustomCaption from "@/components/CustomCaption";
import React from "react";

const EquipmentGallery = () => {
  const equipmentCategories = [
    {
      name: "Záblesková a trvalá světla",
      items: [
        { id: 15, name: "GODOX DP800III-V, 800WS 2x" },
        { id: 14, name: "GODOX SL-150III" },
        { id: 13, name: "NANLITE FS-300B LED BI-COLOR" },
        { id: 1, name: "NANLITE T8-7X. 110 CM 2x" },
      ],
    },

    {
      name: "Světelné modifikátory",
      items: [
        {
          id: 12,
          name: "PROJEKČNÍ ADAPTÉR GODOX BLP (GOBO) + SADA GOBO FILTRŮ",
        },
        { id: 5, name: "SOFTBOX-OCTABOX GODOX 95CM 2x" },

        { id: 2, name: "VOŠTINA K SOFTBOXU GODOX 95CM 2x" },
        { id: 3, name: "SOFTBOX NANLITE 60X90 2x" },
        { id: 4, name: "BALÓNOVÝ SOFTBOX GODOX 65 CM" },
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
        { id: 9, name: "VĚTRÁK 150W" },
        { id: 10, name: "RADIOVÁ ŘIDÍCÍ JEDNOTKA GODOX XT-16 (VYSÍLAČ)" },
        { id: 11, name: "SMOKE GENERATOR LED-500" },
        { id: 16, name: "REFLEXNÍ DESKY" },
        { id: 18, name: "PAPÍROVÁ POZADÍ" },
        { id: 17, name: "VYBAVENÍ" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <CustomCaption title="Naše" subtitle="Vybavení" classProps="" />

      {equipmentCategories.map((category) => (
        <div key={category.name} className="mb-16">
          <h1 className="my-8 text-3xl font-[Montserrat]">{category.name}</h1>

          <div className="grid grid-cols-1 px-10 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100  overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#C8AD81]"
              >
                <div className="bg-gray-300  flex items-center justify-center">
                  <img
                    src={`/images/equipment/${item.id}.jpeg`}
                    alt={item.name}
                    className="h-96 md:h-64 w-full object-cover "
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/equipment/default.jpg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base capitalize font-semibold text-center mb-2">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="max-w-6xl  mx-auto p-6 font-[Montserrat] mt-40">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          INFORMACE O NAŠEM VYBAVENÍ
        </h1>

        <div className="bg-white border border-[#C8AD81]  shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            TRVALÁ SVĚTLA
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center">
              <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
              <span>NANLITE FS-300B LED</span>
            </li>
            <li className="flex items-center">
              <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
              <span>Bi-color</span>
            </li>
            <li className="flex items-center">
              <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
              <span>GODOX SL-150III</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-[#C8AD81] shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            ZABLESKOVÁ SVĚTLA
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center">
              <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
              <span>GODOX DP800III-V, 800WS</span>
            </li>
            <li className="flex items-center">
              <span className="bg-gray-100 px-3 py-1  mr-3">4x</span>
              <span>PAVOTUBE NANLITE T8-7X</span>
            </li>
            <li className="flex items-center">
              <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
              <span>110 CM (2 světla kit)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-[#C8AD81]  shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            SVĚTELNÉ MODIFIKÁTORY
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">
              PROJEKČNÍ ADAPTĚR
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>GODOX BLP ("GOBO"), sada GOBO filtrů</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">SOFTBOXY</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>SOFTBOX NANLITE 60X90</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>SOFTBOX-OCTABOX GODOX 95CM s voštinou</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>BALÓNOVÝ SOFTBOX GODOX 65 CM</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">
              DALŠÍ VYBAVENÍ
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>REFLEKTORY</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>KLAPKY S BAREVNÝMI FILTRY</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">2x</span>
                <span>KOMÍNEK s voštinou</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>RADIOVÁ ŘIDÍCÍ JEDNOTKA GODOX XT-16 (VYSÍLAČ)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>STATIV STUDIOVÝ 2,8M</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>JEŘÁBOVÝ STATIV BOOM 3M</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>BOOM STAND STUDIOVÝ (JEŘÁBOVÝ) STATIV 4,4M</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>SMOKE GENERATOR LED-500</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>VĚTRÁK 150W</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>REFLEXNÍ DESKY</span>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-3 py-1  mr-3">1x</span>
                <span>PAPIROVÁ POZADÍ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentGallery;
