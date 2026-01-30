import { Smartphone } from "lucide-react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaChessKnight } from "react-icons/fa6";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WhyHereSection = ({ WhyHereSecRef }: any) => {
  const t = useTranslations("WonderSetup");

  return (
    <section
      className="lg:pb-14 px-4 opacity-0 transition-all duration-1000 bg-[#0a0a0a]"
      ref={WhyHereSecRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className=" flex flex-col justify-center items-center lg:text-left mb-12 ">
          <p className="text-lg md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
            {t("WhyHere.badge")}
          </p>
          <h2 className=" text-center text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-tight md:leading-tight text-white font-bold mb-2">
            {t("WhyHere.title1")}
          </h2>

          <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed  max-w-5xl text-center">
            {t("WhyHere.desc")}
          </p>
        </div>

        {/* Quote Boxes */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Our Promise Box */}

          {/* Box Container */}
          <div className=" border border-[#ffc522] rounded-lg p-5  lg:p-8  hover:shadow-2xl hover:shadow-[#ffc522]/20 transition-all duration-300">
            <div className="flex flex-wrap items-end gap-3 -mt-[15px]">
              <p className="w-[80%] md:w-[86%] text-xl lg:text-2xl text-white font-bold text-start border-b border-[#ffc522] pb-[10px]">
                {t("WhyHere.card1")}
              </p>
              <div className="w-[10%] md:w-[12%] w-[45px] h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                <FaChessKnight className="text-[#ffc522] w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </div>
            </div>
            <div className="py-[20px]">
              <p className="text-base md:text-lg lg:text-[22px] text-[#ffc522] leading-relaxed ">
                {t("WhyHere.card1Title")}
              </p>
              <p className="text-base md:text-lg lg:text-[22px] text-[#cccccc] leading-relaxed  ">
                {t("WhyHere.card1Desc")}
              </p>
            </div>
            <div className="pb-[30px]">
              <p className="text-base md:text-lg lg:text-[22px] text-[#ffc522] leading-relaxed ">
                {t("WhyHere.card2Title")}
              </p>
              <p className="text-base md:text-lg lg:text-[22px] text-[#cccccc] leading-relaxed  ">
                {t("WhyHere.card2Desc")}
              </p>
            </div>

            <Link
             href="mailto:contactus@wondercapital.group"
              className="inline-flex flex-row items-center justify-center gap-2 w-auto px-4 py-1.5 md:py-2 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
            >
              {t("WhyHere.button")}
              <BsArrowUpRight size={16} className="md:hidden" />
              <BsArrowUpRight
                size={18}
                strokeWidth={0.5}
                className="hidden md:inline"
              />
            </Link>
          </div>

          <div className=" border border-[#ffc522] rounded-lg p-5  lg:p-8  hover:shadow-2xl hover:shadow-[#ffc522]/20 transition-all duration-300">
            <div className="flex flex-wrap items-end gap-3 -mt-[15px]">
              <p className="w-[80%] md:w-[86%] text-xl lg:text-2xl text-white font-bold text-start border-b border-[#ffc522] pb-[10px]">
                {t("WhyHere.card3")}
              </p>
               <div className="w-[10%] md:w-[12%] w-[45px] h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                < HiMiniUserGroup className="text-[#ffc522] w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </div>
            </div>
            <div className="py-[20px]">
              <p className="text-base md:text-lg lg:text-[22px] text-[#ffc522] leading-relaxed ">
                {t("WhyHere.card3Title")}
              </p>
              <p className="text-base md:text-lg lg:text-[22px] text-[#cccccc] leading-relaxed  ">
                {t("WhyHere.card3Desc")}
              </p>
            </div>
            <div className="pb-[30px]">
              <p className="text-base md:text-lg lg:text-[22px] text-[#ffc522] leading-relaxed ">
                {t("WhyHere.card3Title1")}
              </p>
              <p className="text-base md:text-lg lg:text-[22px] text-[#cccccc] leading-relaxed  ">
                {t("WhyHere.card3Desc1")}
              </p>
            </div>

            <Link
             href="mailto:contactus@wondercapital.group"
              className="inline-flex flex-row items-center justify-center gap-2 w-auto px-4 py-1.5 md:py-2 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
            >
              {t("WhyHere.button")}
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

export default WhyHereSection;
