import CustomCaption from "@/components/CustomCaption";

const WhyUs = () => {
  const reasons = [
    {
      icon: "location_on",
      title: "Centrální poloha",
      description: "Nacházíme se přímo v centru Brna",
    },
    {
      icon: "directions_transit",
      title: "Dopravní dostupnost",
      description:
        "Výborná dopravní dostupnost – dostanete se k nám snadno autem i MHD",
    },
    {
      icon: "local_parking",
      title: "Parkování",
      description:
        "Na ulici Kapitána Jaroše je vždy místo k zaparkování a pro naše klienty máme vždy jedno volné parkovací místo!",
    },
    {
      icon: "weekend",
      title: "Exkluzivní sály",
      description:
        "Naše interiérové sály jsou exkluzivní a univerzální. Stylový a originální nábytek",
    },
    {
      icon: "free_breakfast",
      title: "Čekací zóna",
      description:
        "Máme čekací zónu, kde si mohou odpočinout manžel a děti – nabídneme vám čaj, kávu a je k dispozici Wi-Fi",
    },
    {
      icon: "cleaning_services",
      title: "Čistota",
      description: "Dbáme na čistotu – naše sály jsou vždy perfektně uklizené",
    },
    {
      icon: "photo_camera",
      title: "Profesionální technika",
      description:
        "K dispozici máme širokou škálu profesionální techniky, se kterou lze realizovat jakékoli světelné schéma",
    },
    {
      icon: "flash_on",
      title: "Zábleskové světlo",
      description:
        "Zábleskové světlo umožňuje krásné záběry kdykoli během dne (ráno, odpoledne, večer – nezáleží na denní době)",
    },
    {
      icon: "trending_up",
      title: "Trendové lokace",
      description: "Sledujeme trendy a nabízíme ty nejlepší lokace",
    },
    {
      icon: "palette",
      title: "Individuální scény",
      description:
        "Nabízíme možnost vytvořit individuální scény (látky, balónky) na přání",
    },
    {
      icon: "ac_unit",
      title: "Příjemná teplota",
      description:
        "V našich sálech je vždy příjemná teplota – v sále Aurora jsou pro váš komfort 2 klimatizační jednotky",
    },
    {
      icon: "support_agent",
      title: "Administrátor na místě",
      description:
        "Na místě je vždy přítomen administrátor, který vám se vším pomůže",
    },
    {
      icon: "lightbulb",
      title: "Pomoc se světly",
      description: "Pomáháme s nastavením světel",
    },
    {
      icon: "handshake",
      title: "Otevřená spolupráce",
      description: "Naše studio je vždy otevřené ke spolupráci!",
    },
  ];
  return (
    <div>
      <CustomCaption
        title="Proč vybrat"
        subtitle="Imagia ateliér?"
        classProps="!mt-20 !py-10 md:!py-20"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 border-[#C8AD81] border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center flex-col mb-4">
                <div className="w-16 h-16 bg-[#C8AD81] rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons text-4xl text-white">
                    {reason.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
