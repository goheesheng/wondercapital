import { useTranslations } from "next-intl";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WhatYouGet = ({ whatyougetRef }: any) => {
  const t = useTranslations("MarchantAcquiring");

  return (
    <section
      ref={whatyougetRef}
      className="pb-8 lg:pb-14 px-4 bg-[#0a0a0a] opacity-0 transition-all duration-1000"
      id="assurance"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <p className="text-lg md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
            {t("whatyouget.badge")}
          </p>
          <h2 className="text-center text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-8 md:leading-8 text-white font-bold">
            {t("whatyouget.title")}
          </h2>
          <p className="text-center text-base md:text-lg lg:text-[22px] text-white leading-relaxed mb-5 max-w-5xl">
            {t("whatyouget.desc")}
          </p>
        </div>

        <div className=" mb-[30px] grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Fund Regulatory */}
          <div className="rounded-2xl border-2 border-[#4a3622] p-6 lg:p-8  flex flex-col items-center text-center hover:shadow-2xl hover:shadow-[#ffc522]/30 transition-all duration-300">
            <div className="mb-6 w-full flex justify-center">
              <Image
                src="/assets/logo3.png"
                quality={100}
                width={300}
                height={200}
                alt="Regulatory Logo"
                className="object-contain w-[200px] md:w-[350px] lg:w-[400px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl text-white font-bold mb-4">
              {t("whatyouget.card1")}
            </h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed mb-2">
              {t("whatyouget.card1Desc1")}
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed">
              <span className="text-[#ffc522] font-semibold">
                {t("whatyouget.card1Desc2")}
              </span>
              &nbsp; {t("whatyouget.card1Desc3")}
              <span className="text-[#ffc522] font-semibold">
                {t("whatyouget.card1Desc4")}
              </span>
            </p>
          </div>

          {/* Client Fund Safeguarding */}
          <div className="rounded-2xl border-2 border-[#4a3622] p-6 lg:p-8  flex flex-col items-center text-center hover:shadow-2xl hover:shadow-[#ffc522]/30 transition-all duration-300">
            <div className="mb-6 w-full flex justify-center">
              <Image
                src="/assets/logo4.png"
                height={80}
                width={180}
                alt="Safeguarding Logo"
                className="object-contain w-[120px] md:w-[200px] lg:w-[250px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl text-white font-bold mb-4">
              {t("whatyouget.card2")}
            </h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed">
              {t("whatyouget.card2Desc1")}
              <span className="text-[#ffc522] font-semibold">
                {t("whatyouget.card2Desc2")}
              </span>
              {t("whatyouget.card2Desc3")}
              <span className="text-[#ffc522] font-semibold">
                {t("whatyouget.card2Desc4")}
              </span>
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Fund Regulatory */}
          <div className="rounded-2xl border-2 border-[#4a3622] p-6 lg:p-8  flex flex-col items-center text-center hover:shadow-2xl hover:shadow-[#ffc522]/30 transition-all duration-300">
            <div className="mb-6 w-full flex justify-center">
              <Image
                src="/assets/logo1.png"
                height={200}
                width={300}
                alt="Regulatory Logo"
                className="object-contain w-[200px] md:w-[250px] lg:w-[300px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl text-white font-bold mb-4">
              {t("whatyouget.card3")}
            </h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed mb-2">
              {t("whatyouget.card3Desc1")}
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed">
              <span className="text-[#ffc522] font-semibold">
                {t("whatyouget.card3Desc2")}
              </span>
              &nbsp; {t("whatyouget.card3Desc3")}
            </p>
          </div>

          {/* Client Fund Safeguarding */}
          <div className="rounded-2xl border-2 border-[#4a3622] p-6 lg:p-8  flex flex-col items-center text-center hover:shadow-2xl hover:shadow-[#ffc522]/30 transition-all duration-300">
            <div className="mb-6 w-full flex justify-center">
              <Image
                src="/assets/logo2.png"
                height={80}
                width={180}
                alt="Safeguarding Logo"
                className="object-contain w-[120px] md:w-[150px] lg:w-[180px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl text-white font-bold mb-4">
              {t("whatyouget.card4")}
            </h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed">
              {t("whatyouget.card4Desc1")}
              <span className="text-[#ffc522] font-semibold">
                {t("whatyouget.card4Desc2")}
              </span>
              {t("whatyouget.card4Desc3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
