import Image from "next/image";
import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WhatYouGetSection = ({ whatYouGetRef }: any) => {
  const t = useTranslations("WonderSetup");

  return (
    <section
      ref={whatYouGetRef}
      className=" px-4 opacity-0 transition-all duration-1000"
      id="comparison"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2  items-center">
          {/* Comparison Image */}
          <div className="order-2 lg:order-1">
            <Image
              src="/assets/incorption.png"
              height={500}
              width={400}
              alt="Comparison Illustration"
              className="w-full max-w-md mx-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Comparison Table */}
          <div className="order-1 lg:order-2 lg:-ml-12.5">
            <p className="text-lg md:text-base lg:text-xl text-center md:text-start font-semibold text-[#ffc522] tracking-wider mb-4">
              {t("WhatYouGet.badge")}
            </p>
            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-7 md:leading-12 text-center md:text-start  text-white font-bold mb-8">
              {t("WhatYouGet.title")}

              <br />
              <span className="text-[#ffc522]">{t("WhatYouGet.title1")}</span>
            </h2>

            <div className="overflow-x-auto ">
              <div className="grid grid-cols-2">
                {/* Headers */}
                <div className="border-b border-r border-[#2a2a2a]  ">
                  <p className="text-xl lg:text-2xl text-white font-bold text-start">
                    {t("WhatYouGet.card1")}
                  </p>
                  <p className="text-[#cccccc] text-sm md:text-base lg:text-[18px] xl:text-xl leading-relaxed ">
                    {t("WhatYouGet.desc1")}
                  </p>
                </div>

                <div className="border-b border-[#2a2a2a]  px-3 md:px-7.5  ">
                  <p className="text-xl lg:text-2xl text-white font-bold text-start">
                    {t("WhatYouGet.card2")}
                  </p>
                  <p className="text-[#cccccc] text-sm md:text-base lg:text-[18px] xl:text-xl leading-relaxed mb-4 md:mb-6">
                    {t("WhatYouGet.desc2")}
                  </p>
                </div>

                <div className="border-b border-r border-[#2a2a2a] py-5 pr-0.5 md:pr-7.5">
                  <p className="text-xl lg:text-2xl text-white font-bold text-start">
                    {t("WhatYouGet.card3")}
                  </p>
                  <p className="text-[#cccccc] text-sm md:text-base lg:text-[18px] xl:text-xl leading-relaxed ">
                    {t("WhatYouGet.desc3")}
                  </p>
                </div>

                <div className="border-b border-[#2a2a2a] py-5 px-3 md:px-7.5 ">
                  <p className="text-xl lg:text-2xl text-white font-bold text-start">
                    {t("WhatYouGet.card4")}
                  </p>
                  <p className="text-[#cccccc] text-sm md:text-base lg:text-[18px] xl:text-xl leading-relaxed ">
                    {t("WhatYouGet.desc4")}
                  </p>
                </div>

                <div className=" border-r border-[#2a2a2a] py-5 pr-0.5 md:pr-7.5">
                  <p className="text-xl lg:text-2xl text-white font-bold text-start">
                    {t("WhatYouGet.card5")}
                  </p>
                  <p className="text-[#cccccc] text-sm md:text-base lg:text-[18px] xl:text-xl leading-relaxed">
                    {t("WhatYouGet.desc5")}
                  </p>
                </div>

                <div className=" text-white text-base lg:text-lg text-start py-5 px-3 md:px-7.5">
                  <p className="text-xl lg:text-2xl text-white font-bold text-start">
                    {t("WhatYouGet.card6")}
                  </p>
                  <p className="text-[#cccccc] text-sm md:text-base lg:text-[18px] xl:text-xl leading-relaxed">
                    {t("WhatYouGet.desc6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
