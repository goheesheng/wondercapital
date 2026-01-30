import Image from "next/image";
import Link from "next/link";
import {

  Mail,
  Phone,

} from "lucide-react";
import { useTranslations } from "next-intl";
import {Oxygen } from "next/font/google";


const oxygen = Oxygen({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

const oxygenbold = Oxygen({
  subsets: ["latin"],
  display: "swap",
  weight: "700"
});


const Footer = () =>{
  const t = useTranslations("HomePage");

    return(<footer className="mt-14 pb-8 px-4">
        {/* Logo Divider */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#ffc522]" />
          </div>
          <div className="relative bg-[#090a0e] px-8  ">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                height={80}
                width={120}
                alt="Wonder Capital Logo"
                className="object-contain w-[100px] md:w-[120px] lg:w-[150px] h-auto"
              />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-12 mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full bg-[#ffc522] flex items-center justify-center flex-shrink-0">
                <Mail size={14} className="md:hidden" color="#000" />
                <Mail
                  size={16}
                  className="hidden md:block lg:hidden"
                  color="#000"
                />
                <Mail size={18} className="hidden lg:block" color="#000" />
              </div>
              <p
                className={`text-[#cccccc] text-xs md:text-sm lg:text-base xl:text-lg ${oxygen.className}`}
              >
                <span className={`text-white ${oxygenbold.className}`}>
                  {t("footer.email")}:
                </span>{" "}
               <Link href="mailto:contactus@wondercapital.group" className="cursor-pointer">contactus@wondercapital.group</Link> 
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full bg-[#ffc522] flex items-center justify-center flex-shrink-0">
                <Phone size={14} className="md:hidden" color="#000" />
                <Phone
                  size={16}
                  className="hidden md:block lg:hidden"
                  color="#000"
                />
                <Phone size={18} className="hidden lg:block" color="#000" />
              </div>
              <p
                className={`text-[#cccccc] text-xs md:text-sm lg:text-base xl:text-lg ${oxygen.className}`}
              >
                <span className={`text-white ${oxygenbold.className}`}>
                  {t("footer.phone")}:
                </span>{" "}
                <a href="https://wa.me/66994484468" target="_blank" className="cursor-pointer">+66 99 448 4468</a>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#b7b7b7] text-center text-sm md:text-base lg:text-lg xl:text-xl mb-6 mx-auto  px-4">
            {t("footer.description")}
          </p>

          {/* Divider */}
          <div className="w-full border-t border-[#ffffff] mb-6" />

          {/* Copyright */}
          <p className="text-[#ffffff] text-center text-xs md:text-sm lg:text-base xl:text-lg">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    )
}

export default Footer;