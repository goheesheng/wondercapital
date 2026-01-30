import { Check, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CompanyCard = ({ CompanyCardRef }: any) => {
  const t = useTranslations("digitalPayment");

  return (
    <section
      ref={CompanyCardRef}
      className="pb-8  lg:p-8 px-4 opacity-0 transition-all duration-1000"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div>
            <div className="flex flex-row gap-3 mb-[20px]">
              <div className=" px-[15px] py-[5px]  rounded-[24px] bg-[#272010] flex text-center items-center justify-center">
                <p className="text-[14px] md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider">
                  {t("companycard.badge")}
                </p>
              </div>
              <div className=" px-[15px] py-[5px] rounded-[24px] bg-[#272010] flex text-center items-center justify-center">
                <p className="text-[14px] md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider">
                  {t("companycard.title")}
                </p>
              </div>
            </div>

            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-8 md:leading-12 text-white font-bold ">
              {t("companycard.title1")}
            </h2>
            <h2 className="text-[22px] leading-8 md:text-[28px] lg:text-[32px] xl:text-[42px]  md:leading-12 text-[#ffc522] font-bold">
              {t("companycard.title2")}
            </h2>
            <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed mb-5 max-w-5xl">
              {t("companycard.desc")}
            </p>
          </div>
          <Image
            src="/assets/digi3.png"
            alt="payment"
            width={500}
            height={200}
            className="h-[150px] w-[250px] md:h-[250px] md:w-[500px] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Top Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Collect Like A Local - Full Width on Mobile */}
          <div className="lg:col-span-2 rounded-xl bg-[#191919] p-6 lg:p-8 border-[#2a2a2a] border hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20">
            <div className="flex flex-row items-center justify-start gap-3 md:gap-5 mb-4 md:mb-6">
              <h3 className="text-lg md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                {t("companycard.card1")}
              </h3>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Check strokeWidth={4} size={20} color="#ffc522" />
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                {t("companycard.card1Desc1")}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Check strokeWidth={4} size={20} color="#ffc522" />
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                {t("companycard.card1Desc2")}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Check strokeWidth={4} size={20} color="#ffc522" />
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                {t("companycard.card1Desc3")}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Check strokeWidth={4} size={20} color="#ffc522" />
              <p className="text-[#ffc522] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                {t("companycard.card1Desc4")}
              </p>
            </div>
          </div>

          {/* Card Image Section - Overflow on Desktop, Contained on Mobile */}
          <div className="relative rounded-xl bg-[#1a1a1a] p-4 md:p-6 lg:p-8 overflow-hidden lg:overflow-visible border border-[#2a2a2a] hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20 ">
            {/* Mobile: Centered and Contained */}

            {/* Desktop: Overflowing */}
            <div className="">
              <div className="flex flex-row items-center justify-start gap-3 md:gap-5 mb-4 md:mb-6">
                <h3 className="text-lg md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                  {t("companycard.card2")}
                </h3>
              </div>
              {/* <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed mb-4 md:mb-6">
                Collect payments online through all major card networks and
                digital wallets
              </p> */}
              <div className="flex flex-row items-center gap-2">
                <Check strokeWidth={4} size={20} color="#ffc522" />
                <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                  {t("companycard.card2Desc1")}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Check strokeWidth={4} size={20} color="#ffc522" />
                <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                  {t("companycard.card2Desc2")}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Check strokeWidth={4} size={20} color="#ffc522" />
                <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                  {t("companycard.card2Desc3")}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Check strokeWidth={4} size={20} color="#ffc522" />
                <p className="text-[#ffc522] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed ">
                  {t("companycard.card2Desc4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCard;
