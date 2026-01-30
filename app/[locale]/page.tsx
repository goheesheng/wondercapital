/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Link from "next/link";
import {
  Smartphone,
  Zap,
  ChartNoAxesColumn,
 } from "lucide-react";
import { Cabin } from "next/font/google";
import { useEffect, useRef} from "react";
import { BsArrowUpRight } from "react-icons/bs";

import Footer from "../layouts/footer/footer";
import Header from "../layouts/header/header";

// ============================================================================
// FONT CONFIGURATION
// ============================================================================
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap"
});





// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const t = useTranslations("HomePage");
 
  
 
 
  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const assuranceRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  const useCasesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  
  // ============================================================================
  // USE CASES DATA
  // ============================================================================
  const useCases = [
    {
      title: t("usecases.item1.title"),
      image: "/assets/Image3.png",
      items: [
        t("usecases.item1.description1"),
        t("usecases.item1.description2"),
        t("usecases.item1.description3"),
        t("usecases.item1.description4")
      ]
    },
    {
      title: t("usecases.item2.title"),
      image: "/assets/Image4.png",
      items: [
        t("usecases.item2.description1"),
        t("usecases.item2.description2"),
        t("usecases.item2.description3"),
        t("usecases.item2.description4")
      ]
    },
    {
      title: t("usecases.item3.title"),
      image: "/assets/Image5.png",
      items: [
        t("usecases.item3.description1"),
        t("usecases.item3.description2"),
        t("usecases.item3.description3"),
        t("usecases.item3.description4")
      ]
    }
  ];

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
    "/assets/flag/16.png"
  ];

 

 

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = [
      heroRef.current,
      featuresRef.current,
      assuranceRef.current,
      comparisonRef.current,
      useCasesRef.current,
      ctaRef.current
    ];

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <div className={`bg-[#090a0e] min-h-screen ${cabin.className}`}>
      {/* ====================================================================== */}
      {/* HEADER NAVIGATION */}
      {/* ====================================================================== */}
          <Header/>
      {/* ====================================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================================== */}
      <section
        ref={heroRef}
        className="hero-section border-b border-b-[#ffc522] opacity-0 transition-all duration-1000"
      >
        <div className="bg-[url('/assets/hero-section-mb.png')] lg:bg-[url('/assets/hero-section.png')] bg-cover bg-center min-h-[500px] lg:min-h-[700px] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#090a0e]/60 lg:bg-transparent" />
          <div className="max-w-7xl w-full flex items-center justify-center lg:justify-start relative z-10">
            <div className="max-w-[690px] text-center lg:text-left">
              <p className="text-[20px] md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
                {t("hero.badge")}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                {t("hero.title")}{" "}
                <span className="text-[#ffc522]">{t("hero.highlight")}</span>
              </h1>
              <p className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed mb-8">
                {t("hero.description")}
              </p>
              <Link
                href="/contact"
                className="inline-flex flex-row items-center justify-center gap-2 w-auto px-4 py-1.5 md:py-2.5 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
              >
                {t("hero.cta")}{" "}
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
      {/* ====================================================================== */}
      {/* FEATURES SECTION */}
      {/* ====================================================================== */}
      <section
        ref={featuresRef}
        className="py-8 lg:pt-32 lg:pb-14 px-4 opacity-0 transition-all duration-1000"
        id="features"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center lg:text-left mb-12">
            <p className="text-lg md:text-lg lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
              {t("features.badge")}
            </p>
            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-2 md:leading-8 text-white font-bold mb-2">
              {t("features.title1")}
            </h2>
            <h2 className="text-[22px] leading-8 md:text-[28px] lg:text-[32px] xl:text-[42px] md:leading-12 text-[#ffc522] font-bold">
              {t("features.title2")}
            </h2>
          </div>

          {/* Top Feature Cards */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {/* Collect Like A Local - Full Width on Mobile */}
            <div className="lg:col-span-2 rounded-xl bg-[#191919] p-6 lg:p-8 border-[#2a2a2a] border hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20">
              <div className="flex flex-row items-center justify-start gap-3 md:gap-5 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                  <Smartphone className="text-[#ffc522] w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl font-bold text-white">
                  {t("features.collectTitle")}
                </h3>
              </div>
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed mb-4 md:mb-6">
                {t("features.collectDesc")}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-1.5">
                {flagsArr.map((flag, i) =>
                  <img
                    key={i}
                    className="h-[28px] w-[28px] md:h-[35px] md:w-[35px] flex items-center justify-center hover:scale-125 transition-transform duration-200"
                    src={flag}
                    alt="flags"
                  />
                )}
                <span className="text-[#cccccc] italic text-xs md:text-sm self-center ml-2">
                  {t("features.more")}
                </span>
              </div>
            </div>

            {/* Card Image Section - Overflow on Desktop, Contained on Mobile */}
            <div className="relative rounded-xl bg-[#1a1a1a] p-6 md:p-8 lg:p-12 overflow-hidden lg:overflow-visible border border-[#2a2a2a] hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20 min-h-[250px] md:min-h-[300px]">
              {/* Mobile: Centered and Contained */}
              <div className="lg:hidden relative w-full h-full flex items-center justify-center">
                <div className="relative w-full max-w-[300px] md:max-w-[350px]">
                  <Image
                    src="/assets/card.png"
                    height={400}
                    width={420}
                    alt="Payment Cards"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Desktop: Overflowing */}
              <div className="hidden lg:block relative -mt-4">
                <Image
                  src="/assets/card.png"
                  height={300}
                  width={300}
                  alt="Payment Cards"
                  className="object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl scale-125 xl:scale-150"
                />
              </div>
            </div>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Instant Transfers */}
            <div className="rounded-xl bg-[#191919] p-6 lg:p-8 border border-[#2a2a2a] hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20">
              <div className="flex items-center justify-start gap-3 md:gap-5 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                  <Zap className="text-[#ffc522] w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl font-bold text-white">
                  {t("features.instantTitle")}
                </h3>
              </div>
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed">
                {t("features.instantDesc")}
              </p>
            </div>

            {/* Real Time Tracking */}
            <div className="md:col-span-2 lg:col-span-2 rounded-xl bg-[#191919] p-6 lg:p-8 border border-[#2a2a2a] hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-[#272010] flex-shrink-0">
                  <ChartNoAxesColumn className="text-[#ffc522] w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl font-bold text-white">
                  {t("features.trackingTitle")}
                </h3>
              </div>
              <p className="text-[#cccccc] text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed">
                {t("features.trackingDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* ASSURANCE SECTION */}
      {/* ====================================================================== */}
      <section
        ref={assuranceRef}
        className="pb-8 lg:pb-14 px-4 bg-[#0a0a0a] opacity-0 transition-all duration-1000"
        id="assurance"
      >
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 lg:pb-14 flex flex-row justify-center items-center gap-5 lg:gap-10">
            <h3 className="text-lg md:text-base lg:text-xl xl:text-3xl font-bold text-white">
              {t("assurance.partner")}
            </h3>
            <Image src="/assets/gpay.png" width={150} height={150} alt="gpay" />
          </div>
          <div className="text-center mb-12">
            <p className="text-lg md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4">
              {t("assurance.badge")}
            </p>
            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-4 md:leading-8 text-white font-bold">
              {t("assurance.title")}
            </h2>
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
                {t("assurance.regulatory")}
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed mb-2">
                {t("assurance.regulatoryDesc1")}
              </p>
              <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed">
                <span className="text-[#ffc522] font-semibold">
                  {t("assurance.regulatoryDesc2")}
                </span>
                &nbsp;
                {t("assurance.regulatoryDesc3")}
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
                {t("assurance.safeguarding")}
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-[#cccccc] leading-relaxed">
                {t("assurance.safeguarding1")}{" "}
                <span className="text-[#ffc522] font-semibold">
                  {t("assurance.safeguarding2")}
                </span>
                {t("assurance.safeguarding3")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ====================================================================== */}
      {/* COMPARISON SECTION */}
      {/* ====================================================================== */}
      <section
        ref={comparisonRef}
        className="py-8 lg:py-14 px-4 opacity-0 transition-all duration-1000"
        id="comparison"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2  items-center">
            {/* Comparison Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/assets/comparison.png"
                height={500}
                width={400}
                alt="Comparison Illustration"
                className="w-full max-w-md mx-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Comparison Table */}
            <div className="order-1 lg:order-2 lg:-ml-12.5">
              <p className="text-lg md:text-base lg:text-xl text-center md:text-start font-semibold text-[#ffc522] tracking-wider mb-4">
                {t("comparison.badge")}
              </p>
              <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-4 md:leading-12 text-center md:text-start  text-white font-bold mb-8">
                {t("comparison.title")}
              </h2>

              <div className="overflow-x-auto ">
                <div className="grid grid-cols-2">
                  {/* Headers */}
                  <div className="border-b-2 border-[#ffc522] p-4 ">
                    <p className="text-base lg:text-xl text-white font-bold text-center">
                      {t("comparison.col1")}
                    </p>
                  </div>
                  <div className="border-b-2 border-[#ffc522] p-4 ">
                    <p className="text-base lg:text-xl text-white font-bold text-center">
                      {t("comparison.col2")}
                    </p>
                  </div>

                  {/* Row 1 */}
                  <div className="p-4 text-white text-base lg:text-lg text-center">
                    {t("comparison.col1value1")}
                  </div>
                  <div className="p-4 text-white text-base lg:text-lg text-center">
                    {t("comparison.col2value1")}
                  </div>

                  {/* Row 2 */}
                  <div className="p-4 bg-[#60452b] text-white text-base lg:text-lg font-semibold text-center">
                    {t("comparison.col1value2")}
                  </div>
                  <div className="p-4 bg-[#60452b] text-white text-base lg:text-lg text-center">
                    {t("comparison.col2value2")}
                  </div>

                  {/* Row 3 */}
                  <div className="p-4 text-white text-base lg:text-lg text-center">
                    {t("comparison.col1value3")}
                  </div>
                  <div className="p-4 text-white text-base lg:text-lg text-center">
                    {t("comparison.col2value3")}
                  </div>

                  {/* Row 4 */}
                  <div className="p-4 bg-[#60452b] text-white text-base lg:text-lg text-center">
                    {t("comparison.col1value4")}
                  </div>
                  <div className="p-4 bg-[#60452b] text-white text-base lg:text-lg text-center">
                    {t("comparison.col2value4")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* USE CASES SECTION */}
      {/* ====================================================================== */}
      <section
        ref={useCasesRef}
        className="py-8 lg:py-14 px-4 bg-[#0a0a0a] opacity-0 transition-all duration-1000"
        id="use-cases"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="ttext-lg md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4 uppercase">
              {t("usecases.title")}
            </p>
            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-4 md:leading-12 text-white font-bold mb-4">
              {t("usecases.description")}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#ffffff]">
              {t("usecases.description2")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {useCases.map((useCase, index) =>
              <div
                key={index}
                className="rounded-2xl bg-[#191919] p-6 lg:p-8 border border-[#2a2a2a] hover:border-[#ffc522] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffc522]/20 flex flex-col"
              >
                <h3 className="text-lg md:text-base lg:text-xl xl:text-[28px] text-white font-bold mb-6 text-center lg:text-start min-h-[40px] lg:min-h-[60px] flex items-center justify-center">
                  {useCase.title}
                </h3>
                <div className="mb-6 flex-shrink-0 flex justify-center lg:justify-start">
                  <Image
                    src={useCase.image}
                    height={190}
                    width={190}
                    alt={useCase.title}
                    className="h-[160px] w-[160px] md:h-[180px] md:w-[180px] lg:h-[190px] lg:w-[190px] rounded-[12px] hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ul className="space-y-3 flex-grow text-center lg:text-left">
                  {useCase.items.map((item, idx) =>
                    <li
                      key={idx}
                      className="flex items-start gap-3 justify-center lg:justify-start"
                    >
                      <span className="text-[#cccccc] text-sm md:text-base lg:text-lg xl:text-xl">
                        {item}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA SECTION */}
      {/* ====================================================================== */}
      <section
        ref={ctaRef}
        className="py-8 lg:py-14 px-4 opacity-0 transition-all duration-1000"
        id="contact"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[url('/assets/slider.jpg')] bg-cover bg-center rounded-2xl overflow-hidden">
            <div className="bg-black/50 lg:bg-transparent py-8 px-[4] md:p-12 lg:p-16 xl:p-22 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-4">
                {t("cta.title")}{" "}
                <span className="text-[#ffc522]">{t("cta.highlight")}</span>
              </h2>
              <p className="text-[14px] md:text-lg lg:text-xl xl:text-2xl text-white mb-2">
                {t("cta.line1")}
              </p>
              <p className="text-[14px] md:text-lg lg:text-xl xl:text-2xl text-white mb-8">
                {t("cta.line2")}
              </p>
              <Link
                href="/contact"
                className="inline-flex flex-row items-center justify-center gap-2 w-auto px-4 py-1.5 md:py-2.5 rounded-lg bg-white text-black font-semibold text-base md:text-base lg:text-lg hover:bg-[#ffc522] hover:scale-105 transition-all duration-300 shadow-lg mx-auto lg:mx-0"
              >
                {t("hero.cta")}{" "}
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

      {/* ====================================================================== */}
      {/* FOOTER */}
      {/* ====================================================================== */}
       <Footer/>
    </div>
  );
}
