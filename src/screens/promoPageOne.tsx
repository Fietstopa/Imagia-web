import { useTranslation, Trans } from "react-i18next";
import CustomCaption from "../components/CustomCaption";
import f1 from "/images/foto1.jpg";
import f2 from "/images/foto2.jpg";
import mapimage from "/images/mapimage.png";
import { Helmet } from "react-helmet";

const PromoPageOne = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - 54px)" }}
        className="overflow-x-hidden relative py-8 md:py-0"
      >
        <CustomCaption
          title={t("title")}
          subtitle={t("subtitle")}
          classProps="text-center text-4xl md:text-6xl px-4 mb-8 md:mb-12"
        />

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-8 lg:px-12 h-full">
          {/* První obrázek - mobil nad textem, desktop vlevo */}
          <div className="md:order-1 w-full h-[300px] md:h-auto relative">
            <img
              src={f1}
              alt={t("altTags.foto1")}
              className="w-ful object-cover  shadow-lg  p-4"
            />
          </div>

          {/* Textový obsah - mobil uprostřed, desktop uprostřed */}
          <div className="md:order-2 flex">
            <div className="text-[#777777] font-[Montserrat] space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed md:leading-loose">
              <Trans
                i18nKey="descriptionText"
                components={{
                  tram: (
                    <span className="relative group text-[#C6AB81] font-bold underline transition-colors" />
                  ),
                  br: <br />,
                  firstline: <span className="ml-8" />,
                }}
              />
            </div>
          </div>

          {/* Druhý obrázek - mobil pod textem, desktop vpravo */}
          <div className="md:order-3 w-full h-[300px] md:h-auto relative">
            <img
              src={f2}
              alt={t("altTags.foto2")}
              className="w-full  object-cover  shadow-lg  p-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoPageOne;
