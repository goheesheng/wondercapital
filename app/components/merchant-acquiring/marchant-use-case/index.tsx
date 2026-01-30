import { useTranslations } from "next-intl";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UseCases = ({ MarchantUseCaseSecRef }: any) => {
    const t = useTranslations("MarchantAcquiring");
  
  const mainUseCases = [
    {
      title: t("usecase.item1"),
      image: "/assets/usecase/1.png",
     
    },
    {
      title: t("usecase.item2"),
      image: "/assets/usecase/2.jpg",
     
    },
    {
      title: t("usecase.item3"),
      image: "/assets/usecase/3.png",
     
    },
    {
      title: t("usecase.item4"),
      image: "/assets/usecase/4.png",
     
    }
  ];

  const secondaryUseCases = [
    {
      title: t("usecase.item5"),
      image: "/assets/usecase/5.png"
    },
    {
      title: t("usecase.item6"),
      image: "/assets/usecase/6.png"
    },
    {
      title: t("usecase.item7"),
      image: "/assets/usecase/7.png"
    },
    {
      title: t("usecase.item8"),
      image: "/assets/usecase/8.png"
    }
  ];

  return (
    <div
      ref={MarchantUseCaseSecRef}
      className="min-h-screen  text-white py-16 px-4"
    >
      <div className=" mx-auto">
        {/* Header */}

        <div className="text-center mb-12">
          <p className="ttext-lg md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4 uppercase">
             {t("usecase.badge")} 
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-4 md:leading-12 text-white font-bold mb-4">
            {t("usecase.title")}
          </h2>
        </div>

        {/* Main Use Cases Grid */}
        <div className="flex flex-wrap gap-[25px] items-end justify-end">
          <div
            className={`w-[100%] md:w-[18%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-60  overflow-hidden">
              <img
                src={mainUseCases[0].image}
                alt={mainUseCases[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {mainUseCases[0].title}
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`w-[100%] md:w-[28%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-85  overflow-hidden">
              <img
                src={mainUseCases[1].image}
                alt={mainUseCases[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {mainUseCases[1].title}
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`w-[100%] md:w-[20%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-70 overflow-hidden">
              <img
                src={mainUseCases[2].image}
                alt={mainUseCases[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {mainUseCases[2].title}
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`w-[100%] md:w-[22%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-50 overflow-hidden">
              <img
                src={mainUseCases[3].image}
                alt={mainUseCases[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {mainUseCases[3].title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[25px] flex flex-wrap gap-[25px] items-start ">
          <div
            className={`w-[100%] md:w-[22%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-50 overflow-hidden">
              <img
                src={secondaryUseCases[0].image}
                alt={secondaryUseCases[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {secondaryUseCases[0].title}
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`w-[100%] md:w-[20%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-70 overflow-hidden">
              <img
                src={secondaryUseCases[1].image}
                alt={secondaryUseCases[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {secondaryUseCases[1].title}
                </h3>
              </div>
            </div>
          </div>

          <div
            className={`w-[100%] md:w-[28%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-85  overflow-hidden">
              <img
                src={secondaryUseCases[2].image}
                alt={secondaryUseCases[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {secondaryUseCases[2].title}
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`w-[100%] md:w-[18%] relative overflow-hidden rounded-lg group cursor-pointer `}
          >
            <div className="relative  h-60  overflow-hidden">
              <img
                src={secondaryUseCases[3].image}
                alt={secondaryUseCases[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-2">
                <h3 className="text-2xl font-semibold  text-white text-center">
                  {secondaryUseCases[3].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
