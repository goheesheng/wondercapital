import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Overview = ({ overviewRef }: any) => {
  const t = useTranslations("MarchantAcquiring");

  return (
    <section
      className="py-8 lg:pt-32 lg:pb-14 px-4 opacity-0 transition-all duration-1000 bg-[#0a0a0a]"
      ref={overviewRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center lg:text-left mb-8">
          <p className="text-lg md:text-lg lg:text-xl font-medium text-[#ffc522] tracking-wider mb-4">
            {t("overview.badge")}
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-tight md:leading-tight text-white font-bold mb-2">
            {t("overview.title")}
          </h2>

          <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed mb-5 max-w-5xl">
            {t("overview.desc")}
          </p>
        </div>

        {/* Quote Boxes */}
        <div className="mb-[20px] flex flex-wrap items-center justify-start gap-2">
          <h3 className="w-[100%] md:w-[38%] text-lg  md:text-base lg:text-xl xl:text-3xl font-bold text-white">
            {t("overview.item1")}
          </h3>
          <div className="w-[100%] md:w-[60%] border-b border-b-[#ffc522]"></div>
        </div>
        <div className="flex flex-wrap gap-7 items-center">
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item2")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item3")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item4")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item5")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item6")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item7")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item8")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item9")}
            </h3>
          </div>
          <div className="w-[100%] md:w-[31%] flex flex-row items-center gap-5">
            <Check strokeWidth={3} size={24} color="#ffc522" />
            <h3 className="text-lg  md:text-base lg:text-xl xl:text-3xl font-medium text-white">
              {t("overview.item10")}
            </h3>
          </div>
        </div>
        <div className="mt-[20px] md:mt-[40px] border-b border-b-[#ffc522]"></div>
      </div>
    </section>
  );
};

export default Overview;
