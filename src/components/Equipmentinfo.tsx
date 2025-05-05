import React from "react";

const EquipmentInfo: React.FC = () => {
  // Equipment data structure
  const equipmentData = [
    {
      title: "TRVALÁ SVĚTLA",
      items: [
        { quantity: "2x", name: "NANLITE FS-300B LED Bi-color" },

        { quantity: "1x", name: "GODOX SL-150III" },
      ],
    },
    {
      title: "ZABLESKOVÁ SVĚTLA",
      items: [
        { quantity: "2x", name: "GODOX DP800III-V, 800WS" },
        {
          quantity: "2x",
          name: "PAVOTUBE NANLITE T8-7X 110 CM",
        },
      ],
    },
    {
      title: "SVĚTELNÉ MODIFIKÁTORY",
      subsections: [
        {
          title: "PROJEKČNÍ ADAPTĚR",
          items: [
            { quantity: "2x", name: 'GODOX BLP ("GOBO"), sada GOBO filtrů' },
          ],
        },
        {
          title: "SOFTBOXY",
          items: [
            { quantity: "2x", name: "SOFTBOX-OCTABOX GODOX 95CM s voštinou" },
            { quantity: "1x", name: "BALÓNOVÝ SOFTBOX GODOX 65 CM" },
          ],
        },
        {
          title: "DALŠÍ VYBAVENÍ",
          items: [
            { quantity: "4x", name: "REFLEKTORY" },
            { quantity: "1x", name: "KLAPKY S BAREVNÝMI FILTRY" },
            { quantity: "1x", name: "KOMÍNEK s voštinou" },
            {
              quantity: "1x",
              name: "RADIOVÁ ŘIDÍCÍ JEDNOTKA GODOX XT-16 (VYSÍLAČ)",
            },
            { quantity: "2x", name: "STATIV STUDIOVÝ 2,8M" },
            { quantity: "1x", name: "JEŘÁBOVÝ STATIV BOOM 3M" },
            {
              quantity: "1x",
              name: "BOOM STAND STUDIOVÝ (JEŘÁBOVÝ) STATIV 4,4M",
            },
            { quantity: "1x", name: "SMOKE GENERATOR LED-500" },
            { quantity: "1x", name: "VĚTRÁK 150W" },
            { quantity: "2x", name: "REFLEXNÍ DESKY" },
            { quantity: "1x", name: "PAPIROVÁ POZADÍ" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-[Montserrat] mt-40">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        INFORMACE O NAŠEM VYBAVENÍ
      </h1>

      {equipmentData.map((section, index) => (
        <div
          key={index}
          className="bg-white border-[#C7AC81] border  shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {section.title}
          </h2>

          {/* Render simple items */}
          {section.items && (
            <ul className="grid grid-cols-1   gap-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="bg-gray-100 px-3 py-1  mr-3">
                    {item.quantity}
                  </span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Render subsections */}
          {section.subsections &&
            section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="mb-6">
                <h3 className="text-xl font-medium text-gray-600 mb-3">
                  {subsection.title}
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {subsection.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-gray-100 px-3 py-1  mr-3">
                        {item.quantity}
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default EquipmentInfo;
