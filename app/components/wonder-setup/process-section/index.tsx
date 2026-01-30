import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TheProcess = ({ TheProcessSecRef }: any) => {
      const t = useTranslations("WonderSetup");
    
  // ============================================================================
  // Process DATA
  // ============================================================================
  const process = [
    {
      title: t("process.title1"),
      description:t("process.description1") 
    },
    {
     title: t("process.title2"),
      description:t("process.description2") 
    },
    {

     title: t("process.title3"),
      description:t("process.description3") 
    }
  ];

  return (
    <section
      ref={TheProcessSecRef}
      className="py-8 lg:py-14 px-4 bg-[#0a0a0a] opacity-0 transition-all duration-1000"
      id="use-cases"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="ttext-lg md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4 uppercase">
            {t("process.badge")}
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-8 md:leading-12 text-white font-bold mb-4">
             {t("process.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {process.map((item, index) => (
            <div
              key={index}
              className=" rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[130px] md:rounded-br-[130px] bg-white p-4 md:p-6 lg:p-8  hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20 flex flex-col item-center"
            >
              <div className="flex flex-row justify-end items-end">
                <div className=" w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#272010] flex-shrink-0 ">
                  <h1 className="text-[#ffc522] text-2xl md:text-5xl font-bold ">
                    {index + 1}
                  </h1>
                </div>
              </div>
              <h3 className="pt-[20px] md:pt-[40px] text-xl lg:text-2xl text-black  font-bold mb-3  lg:text-start min-h-[40px] lg:min-h-[60px] flex items-start justify-start">
                {item.title}
              </h3>

              <p className="text-black pb-[20px] md:pb-[40px] text-sm md:text-base lg:text-lg xl:text-xl max-w-[80%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
