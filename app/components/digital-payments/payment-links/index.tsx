import { Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaymentLinks = ({ PaymetLinksRef }: any) => {
  const t = useTranslations("digitalPayment");

  const flagsArr = [
    "/assets/flag/1.png",
    "/assets/flag/2.png",
    "/assets/flag/3.png",
    "/assets/flag/4.png",
    "/assets/flag/5.png",
    "/assets/flag/6.png",
    "/assets/flag/7.png",
    "/assets/flag/8.png",
    "/assets/flag/9.png",
    "/assets/flag/10.png",
    "/assets/flag/11.png",
    "/assets/flag/12.png",
    "/assets/flag/13.png",
    "/assets/flag/14.png",
    "/assets/flag/15.png",
    "/assets/flag/16.png",
  ];

  return (
    <section
      ref={PaymetLinksRef}
      className="py-8 lg:pt-32 lg:pb-14 px-4 opacity-0 transition-all duration-1000"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <div className="flex flex-row gap-3 mb-[20px]">
              <div className=" px-[20px] py-[5px]  rounded-[24px] bg-[#272010] flex text-center items-center justify-center">
                <p className="text-base md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider">
                  {t("paymentlinks.badge")}
                </p>
              </div>
              <div className=" px-[20px] py-[5px] rounded-[24px] bg-[#272010] flex text-center items-center justify-center">
                <p className="text-base md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider">
                  {t("paymentlinks.title")}
                </p>
              </div>
            </div>

            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-2 md:leading-8 text-white font-bold mb-2">
              {t("paymentlinks.title1")}
            </h2>
            <h2 className="text-[22px] leading-8 md:text-[28px] lg:text-[32px] xl:text-[42px] md:leading-12 text-[#ffc522] font-bold">
              {t("paymentlinks.title2")}
            </h2>
            <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed mb-5 max-w-5xl">
              {t("paymentlinks.desc")}
            </p>
          </div>
          <Image
            src="/assets/digi1.png"
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
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                <BsCurrencyExchange className="text-[#ffc522] w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                {t("paymentlinks.card")}
              </h3>
            </div>
            <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed mb-4 md:mb-6">
              {t("paymentlinks.cardDesc")}
            </p>
            <div className="flex flex-wrap gap-1 md:gap-1.5">
              {flagsArr.map((flag, i) => (
                <img
                  key={i}
                  className="h-[28px] w-[28px] md:h-[35px] md:w-[35px] flex items-center justify-center hover:scale-125 transition-transform duration-200"
                  src={flag}
                  alt="flags"
                />
              ))}
              <span className="text-[#cccccc] italic text-xs md:text-sm self-center ml-2">
                {t("paymentlinks.more")}
              </span>
            </div>
          </div>

          {/* Card Image Section - Overflow on Desktop, Contained on Mobile */}
          <div className="relative rounded-xl bg-[#1a1a1a] p-4 md:p-6 lg:p-8 overflow-hidden lg:overflow-visible border border-[#2a2a2a] hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20 min-h-[250px] md:min-h-[300px]">
            {/* Mobile: Centered and Contained */}

            {/* Desktop: Overflowing */}
            <div className="">
              <div className="flex flex-row items-center justify-start gap-3 md:gap-5 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                  <AiOutlineCreditCard className="text-[#ffc522] w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                  {t("paymentlinks.card2")}
                </h3>
              </div>
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-xl leading-relaxed mb-4 md:mb-6">
                {t("paymentlinks.card2Desc")}
              </p>

              <Image
                src="/assets/digi2.png"
                alt="payment"
                width={200}
                height={100}
                className="h-[50px] w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentLinks;
