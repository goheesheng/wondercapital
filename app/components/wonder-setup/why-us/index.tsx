import { useTranslations } from "next-intl";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WhyUs = ({ reff }: any) => {
    const t = useTranslations("WonderSetup");
  
  return (
    <section
      className="py-[40px]  lg:pt-32  px-4 opacity-0 transition-all duration-1000 bg-[#0a0a0a]"
      ref={reff}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center lg:text-left mb-12">
          <p className="text-lg md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
             {t("WhyUs.badge")}
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-tight md:leading-tight text-white font-bold mb-2">
                         {t("WhyUs.title1")}

          </h2>
          <h2 className="text-[22px] md:text-[28px] lg:text-[32px] xl:text-[42px] leading-tight md:leading-tight text-[#ffc522] font-bold mb-6">
             {t("WhyUs.title2")}
          </h2>
          <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed mb-12 max-w-5xl">
           {t("WhyUs.desc")}
          </p>
        </div>

        {/* Quote Boxes */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Our Promise Box */}
          <div className="relative group">
            {/* Top Left Quote */}
            <div className="bg-[#090a0e] h-[30px] w-[30px] md:h-[40px] md:w-[45px] absolute -top-[22px] md:-top-[38px] left-[8px] text-[#ffffff] text-[80px] md:text-[125px]   leading-none z-10">
              &ldquo;
            </div>

            {/* Box Container */}
            <div className="relative border border-[#ffc522] rounded-lg p-8 lg:p-10  hover:shadow-2xl hover:shadow-[#ffc522]/20 transition-all duration-300">
              <div className="pt-6">
                <h3 className="text-lg text-center md:text-base lg:text-xl xl:text-3xl font-bold text-[#ffc522]">
                  {t("WhyUs.card1")}
                </h3>
                <h3 className="text-lg mb-5 text-center md:text-base lg:text-xl xl:text-3xl font-bold text-white">
                   {t("WhyUs.card1sub")}
                </h3>
                <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed text-center">
                    {t("WhyUs.card1Desc1")}
                  <span className="text-[#ffc522] font-semibold">
                    {t("WhyUs.card1Desc2")}
                  </span>
                   {t("WhyUs.card1Desc3")}
                  <span className="text-[#ffc522] font-semibold">
                      {t("WhyUs.card1Desc4")}
                  </span>
                  
                </p>
              </div>
            </div>

            {/* Bottom Right Quote */}
            <div className="bg-[#090a0e] h-[30px] w-[30px] md:h-12.5 md:w-11.25 absolute -bottom-[20px] md:-bottom-[40px] right-[8px] text-[#ffffff] text-[80px] md:text-[125px]   leading-none z-10 rotate-180">
              &ldquo;
            </div>
          </div>

          {/* Our Ethics Box */}
          <div className="relative group">
            {/* Top Left Quote */}
            <div className="bg-[#090a0e] h-[30px] w-[30px] md:h-[40px] md:w-[45px] absolute -top-[22px] md:-top-[38px] left-[8px] text-[#ffffff] text-[80px] md:text-[125px]   leading-none z-10">
              &ldquo;
            </div>

            {/* Box Container */}
            <div className="relative border border-[#ffc522] rounded-lg p-8 lg:p-10  hover:shadow-2xl hover:shadow-[#ffc522]/20 transition-all duration-300">
              <div className="pt-6">
                <h3 className="text-lg text-center text-[#ffc522] md:text-base lg:text-xl xl:text-3xl font-bold ">
                   {t("WhyUs.card2")}
                </h3>
                <h3 className="text-lg mb-5 text-center md:text-base lg:text-xl xl:text-3xl font-bold text-white">
                   {t("WhyUs.card2sub")}
                </h3>
                <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed text-center">
                  {t("WhyUs.card2Desc1")}
                  <span className="text-[#ffc522] font-semibold">
                    {t("WhyUs.card2Desc2")}
                  </span> 
                  {t("WhyUs.card2Desc3")}
                </p>
              </div>
            </div>

            {/* Bottom Right Quote */}
            <div className="bg-[#090a0e] h-[30px] w-[30px] md:h-12.5 md:w-11.25 absolute -bottom-[20px] md:-bottom-[40px] right-[8px] text-[#ffffff] text-[80px] md:text-[125px]   leading-none z-10 rotate-180">
              &ldquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
