import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReadyToStream = ({ReadyToStreamSecRef}: any) =>{
      const t = useTranslations("digitalPayment");
  
   return(
     <section
        ref={ReadyToStreamSecRef}
        className="py-8 lg:py-14 px-4 opacity-0 transition-all duration-1000"
        id="contact"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[url('/assets/slider3.png')] bg-cover bg-center rounded-2xl overflow-hidden">
            <div className="bg-black/50 lg:bg-transparent py-8 px-[4] md:p-12 lg:p-16 xl:p-22 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-4">
               {t("readystrams.title1")}
                <span className="text-[#ffc522]"> {t("readystrams.title2")}</span>
              </h2>
              <p className="text-[14px] md:text-lg lg:text-xl xl:text-2xl text-white mb-2">
                {t("readystrams.title3")}
              </p>
              <p className="text-[14px] md:text-lg lg:text-xl xl:text-2xl text-white mb-8">
               {t("readystrams.title4")}
              </p>
              <Link
               href="mailto:contactus@wondercapital.group"
                className="inline-flex flex-row items-center justify-center gap-2 w-auto px-4 py-1.5 md:py-2.5 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
              >
                {t("readystrams.btn")}
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
   )
}


export default ReadyToStream;