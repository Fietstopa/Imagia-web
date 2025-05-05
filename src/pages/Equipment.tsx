import CustomCaption from "@/components/CustomCaption";
import React from "react";

const EquipmentGallery = () => {
  const equipmentItems = [
    {
      id: 1,
      name: "Profesionální fotoaparát",
    },
    {
      id: 2,
      name: "Objektiv 24-70mm",
    },
    {
      id: 3,
      name: "Objektiv 70-200mm",
    },
    {
      id: 4,
      name: "Makro objektiv",
    },
    {
      id: 5,
      name: "Studiové světlo",
    },
    {
      id: 6,
      name: "Odrazná deska",
    },
    {
      id: 7,
      name: "Stativ Manfrotto",
    },
    {
      id: 8,
      name: "Dron DJI Mavic",
    },
    {
      id: 9,
      name: "Gimbal stabilizátor",
    },
    {
      id: 10,
      name: "Fotografický set",
    },
    {
      id: 11,
      name: "Bateriový grip",
    },
    {
      id: 12,
      name: "Externí blesk",
    },
    {
      id: 13,
      name: "Softbox",
    },
    {
      id: 14,
      name: "Filtrový set",
    },
    {
      id: 15,
      name: "Fotografický batoh",
    },
    {
      id: 16,
      name: "Monitor kalibrátor",
    },
    {
      id: 17,
      name: "Bezdrátový trigger",
    },
    {
      id: 18,
      name: "Green screen",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <CustomCaption
        title="Naše"
        subtitle="Vybevení"
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
