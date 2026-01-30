import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslations } from "next-intl";
export default function IncorporationHero() {
  const t = useTranslations("WonderSetup");
  return (
    <section className="relative min-h-125 lg:min-h-175 flex items-start justify-center overflow-hidden">
      {/* Background Image - Shows only buildings (center area) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/singapore-hero.jpg"
          alt="Singapore Cityscape"
          fill
          className="object-cover "
          priority
          quality={100}
        />
        {/* Optional: Slight dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-35 text-center">
        {/* Top Label */}
        <div className="mb-6 ">
          <p className="animate-fadeIn text-[20px] md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
             {t("hero.badge")}
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 animate-slideUp text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
          {t("hero.title")}
          <br />
          <span className="text-[#ffc522] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  leading-tight mb-6">
            {t("hero.highlight")}
          </span>
        </h1>

        {/* CTA Button */}
        <div className="animate-slideUp delay-200">
          <Link
            href="mailto:contactus@wondercapital.group"
            className="inline-flex flex-row items-center justify-center gap-2 w-auto px-6 py-1.5 md:py-2.5 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
          >
             {t("hero.cta")} <BsArrowUpRight size={16} className="md:hidden" />
            <BsArrowUpRight
              size={18}
              strokeWidth={0.5}
              className="hidden md:inline"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
