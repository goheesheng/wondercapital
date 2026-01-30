import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DigitalPaymentHeroSec = ({ DigiHeroRef }: any) => {
        const t = useTranslations("digitalPayment");
    
  return (
    <section
      ref={DigiHeroRef}
      className="hero-section border-b border-b-[#ffc522] opacity-0 transition-all duration-1000"
    >
      {/* bg-[url('/assets/hero-section-mb.png')] lg: */}
      <div className="bg-[url('/assets/digi-hero1.jpg')] bg-cover bg-center min-h-[500px] lg:min-h-[700px] flex items-center md:items-start justify-center px-4">
        <div className="absolute inset-0 bg-[#090a0e]/60 lg:bg-transparent" />
        <div className="max-w-7xl w-full flex flex-col items-center justify-center lg:justify-start relative z-10">
          <div className=" text-center mt-[20px] md:mt-[100px]">
            <h1 className="animate-fadeIn text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              {t("hero.main")}
            </h1>
          </div>
          <div className=" w-full gap-5 md:gap-0 flex flex-col md:flex-row items-center justify-between md:mt-[50px]">
            <div className="animate-slideUp max-w-[300px] text-center lg:text-left">
              <p className="text-[20px] md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-2">
                             {t("hero.title1")}

              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2">
                                             {t("hero.title1desc1")}

              </h1>
              <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed">
                                                           {t("hero.title1desc2")}

              </p>
            </div>
            <div className="animate-slideUp max-w-[400px] text-center lg:text-right">
              <p className="text-[20px] md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-2">
                {t("hero.title2")}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2">
                {t("hero.title2desc1")}
              </h1>
              <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed">
               {t("hero.title2desc2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPaymentHeroSec;
