import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarchantHeroSection = ({ MarchantheroRef }: any) => {
  const t = useTranslations("MarchantAcquiring");

  return (
    <section
      ref={MarchantheroRef}
      className="hero-section border-b border-b-[#ffc522] opacity-0 transition-all duration-1000"
    >
      <div className="bg-[url('/assets/hero3.png')] bg-cover bg-center min-h-[500px] lg:min-h-[700px] flex items-start justify-center px-4">
        <div className="absolute inset-0 bg-[#090a0e]/40 " />
        <div className="max-w-7xl w-full flex items-start justify-center relative z-10 mt-30">
          <div className=" text-center animate-fadeIn">
            <p className="text-[20px] md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
              {t("hero.badge")}
            </p>
            <h1 className="animate-slideUp text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {t("hero.title")}
            </h1>
            <h1 className="animate-slideUp delay-200 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-[#ffc522]">{t("hero.title2")}</span>
            </h1>

            <Link
             href="mailto:contactus@wondercapital.group"
              className="animate-slideUp delay-200 inline-flex flex-row items-center justify-center gap-2 w-auto px-6 py-1.5 md:py-2 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
            >
              {t("hero.btn")}

              <BsArrowUpRight size={16} className="md:hidden" />
              <BsArrowUpRight
                size={18}
                strokeWidth={0.5}
                className="hidden md:inline"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarchantHeroSection;
