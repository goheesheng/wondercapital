"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  BriefcaseBusiness,
  HandCoins,
  Wallet,
  DollarSign,
  CreditCard,
  Briefcase
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Locale } from "next-intl";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
interface Language {
  code: string;
  name: string;
  flag: string;
  locale: string;
}


const Header = () =>{
  const t = useTranslations("HomePage");
// ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
   const [isPending, startTransition] = useTransition();
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

// eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileHowItWorksOpen, setMobileHowItWorksOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState<boolean>(false);
// ============================================================================
  // LANGUAGE OPTIONS
  // ============================================================================
  const languages: Language[] = [
    { locale: "en", code: "ENG", name: "English", flag: "/assets/flag/uk.png" },
    {
      locale: "ja",
      code: "JPN",
      name: "日本語",
      flag: "/assets/flag/japan.jpg"
    },
    { locale: "zh", code: "CHN", name: "中文", flag: "/assets/flag/china.png" }
  ];
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.filter(lang => lang.locale === activeLocale)[0]
  );

   const [howItWorksOpen, setHowItWorksOpen] = useState(false);
    const howItWorksDropdownRef = useRef<HTMLDivElement>(null);
   const dropdownRef = useRef<HTMLDivElement>(null);

    // ============================================================================
  // EFFECTS
  // ============================================================================

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
// Add to your existing useEffect for closing dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        howItWorksDropdownRef.current &&
        !howItWorksDropdownRef.current.contains(event.target as Node)
      ) {
        setHowItWorksOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
   // Handle scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // ============================================================================
  // HANDLERS
  // ============================================================================
  function handleSelect(language: Language) {
    setSelectedLanguage(language);
    setIsOpen(false);
    const nextLocale = language.locale.toLowerCase() as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileHowItWorksOpen(false);
  };
    return(
         <>
           <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "shadow-2xl bg-[#090a0e]/95 backdrop-blur-sm"
          : "bg-[#090a0e]"}`}
      >
        <div className="h-20 lg:h-32 w-full border-b border-b-[#ffc522] flex items-center justify-center px-4">
          <div className="flex items-center justify-between w-full max-w-7xl">
            {/* Mobile Logo & Menu */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  height={80}
                  width={120}
                  alt="Wonder Capital Logo"
                  className="object-contain"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:text-[#ffc522] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <Link
                className="text-lg xl:text-[18px] text-white font-medium hover:text-[#ffc522] transition-colors duration-300"
                href="#about"
              >
                {t("nav.about")}
              </Link>

              {/* How It Works Dropdown */}
              <div
                className="relative outline-none border-none focus:border-none focus:outline-none"
                ref={howItWorksDropdownRef}
              >
                <button
                  onClick={() => setHowItWorksOpen(!howItWorksOpen)}
                  className={`flex items-center gap-2 text-white outline-none border-none focus:border-none focus:outline-none font-medium hover:text-[#ffc522] transition-all duration-300 ${"text-lg xl:text-[18px]"}`}
                  aria-label="How It Works"
                  aria-expanded={howItWorksOpen}
                >
                  {t("nav.howItWorks")}
                  <ChevronDown
                    className={`transition-all duration-300 ${howItWorksOpen
                      ? "rotate-180"
                      : ""} w-5 h-5`}
                  />
                </button>

                {/* Dropdown Menu */}
                {howItWorksOpen &&
                  <div className="absolute top-full mt-2 left-0 bg-[#090a0e] border border-[#ffc522] rounded-lg shadow-2xl overflow-hidden z-50 min-w-[320px] animate-fadeIn">
                    <div className="py-2">
                      <Link
                        href="/wonder-company-setup"
                        onClick={() => setHowItWorksOpen(false)}
                        className="w-full flex items-start gap-3 outline-none border-none focus:border-none focus:outline-none px-4 py-3 hover:bg-[#ffc522]/10 transition-colors duration-200"
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#ffc522]/20 flex items-center justify-center flex-shrink-0">
                          <BriefcaseBusiness className="text-[#ffc522] w-5 h-5" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-white font-semibold text-base">
                            {t("nav.howItWorksNav.item1.title")}
                          </span>
                          <span className="text-[#cccccc] text-sm">
                            {t("nav.howItWorksNav.item1.desc")}
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/virtual-banking-service"
                        onClick={() => setHowItWorksOpen(false)}
                        className="w-full flex items-start gap-3 outline-none border-none focus:border-none focus:outline-none px-4 py-3 hover:bg-[#ffc522]/10 transition-colors duration-200"
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#ffc522]/20 flex items-center justify-center flex-shrink-0">
                          <HandCoins className="text-[#ffc522] w-5 h-5" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-white font-semibold text-base">
                            {t("nav.howItWorksNav.item2.title")}
                          </span>
                          <span className="text-[#cccccc] text-sm">
                            {t("nav.howItWorksNav.item2.desc")}
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/merchant-acquiring"
                        onClick={() => setHowItWorksOpen(false)}
                        className="w-full flex items-start gap-3 outline-none border-none focus:border-none focus:outline-none  px-4 py-3 hover:bg-[#ffc522]/10 transition-colors duration-200"
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#ffc522]/20 flex items-center justify-center flex-shrink-0">
                          <Wallet className="text-[#ffc522] w-5 h-5" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-white font-semibold text-base">
                            {t("nav.howItWorksNav.item3.title")}
                          </span>
                          <span className="text-[#cccccc] text-sm">
                            {t("nav.howItWorksNav.item3.desc")}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>}
              </div>

              {/* Center Logo */}
              <div className="bg-[#090a0e] rounded-[12px] relative top-12 px-10">
                <Link href="/">
                  <Image
                    src="/assets/logo.png"
                    height={150}
                    width={170}
                    alt="Wonder Capital Logo"
                    className="object-contain"
                  />
                </Link>
              </div>

              <Link
                className="text-lg xl:text-[18px] text-white font-medium hover:text-[#ffc522] transition-colors duration-300"
                href="/contact"
              >
                {t("nav.contact")}
              </Link>

              {/* Language Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-3 text-white px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-300 min-w-[140px]"
                  aria-label="Select Language"
                  aria-expanded={isOpen}
                >
                  <img
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-lg xl:text-[18px] font-medium">
                    {selectedLanguage.code}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen
                      ? "rotate-180"
                      : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen &&
                  <div className="absolute top-full mt-2 right-0 bg-[#090a0e] border border-[#ffc522] rounded-lg shadow-2xl overflow-hidden z-50 min-w-[220px] animate-fadeIn">
                    <div className="py-2">
                      {languages.map(language =>
                        <button
                          key={language.code}
                          onClick={() => handleSelect(language)}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#ffc522]/10 transition-colors duration-200 ${selectedLanguage.code ===
                          language.code
                            ? "bg-[#ffc522]/20"
                            : ""}`}
                        >
                          <img
                            src={language.flag}
                            alt={language.name}
                            className="h-8 w-8 rounded-full object-cover border border-[#ffc522]"
                          />
                          <div className="flex flex-col items-start">
                            <span className="text-white font-semibold">
                              {language.code}
                            </span>
                            <span className="text-[#cccccc] text-sm">
                              {language.name}
                            </span>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen &&
          <div className="lg:hidden fixed min-h-screen w-full  bg-[#090a0e] z-999 animate-fadeIn">
            <nav className="flex flex-col items-center justify-start pt-[30px] h-full space-y-8 px-4">
              <Link
                href="#about"
                onClick={closeMobileMenu}
                className="text-2xl text-white font-medium hover:text-[#ffc522] transition-colors"
              >
                {t("nav.about")}
              </Link>

              {/* Mobile How It Works Dropdown */}
              <div className="w-full max-w-xs">
                <button
                  onClick={() => setMobileHowItWorksOpen(!mobileHowItWorksOpen)}
                  className="flex items-center justify-center gap-2 text-2xl text-white font-medium hover:text-[#ffc522] transition-colors w-full"
                >
                  {t("nav.howItWorks")}
                  <ChevronDown
                    className={`transition-transform duration-300 ${mobileHowItWorksOpen
                      ? "rotate-180"
                      : ""} w-6 h-6`}
                  />
                </button>

                {/* Mobile Dropdown Items */}
                {mobileHowItWorksOpen &&
                  <div className="mt-4 space-y-3 bg-[#090a0e] border border-[#ffc522] rounded-lg p-3 animate-fadeIn">
                    <Link
                      href="/wonder-company-setup"
                      onClick={closeMobileMenu}
                      className="flex items-start gap-3 p-3 hover:bg-[#ffc522]/10 rounded-lg transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-[#ffc522]/20 flex items-center justify-center flex-shrink-0">
                        <BriefcaseBusiness className="text-[#ffc522] w-5 h-5" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-white font-semibold text-base">
                          {t("nav.howItWorksNav.item1.title")}
                        </span>
                        <span className="text-[#cccccc] text-sm">
                          {t("nav.howItWorksNav.item1.desc")}
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/virtual-banking-service"
                      onClick={closeMobileMenu}
                      className="flex items-start gap-3 p-3 hover:bg-[#ffc522]/10 rounded-lg transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-[#ffc522]/20 flex items-center justify-center flex-shrink-0">
                        <HandCoins className="text-[#ffc522] w-5 h-5" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-white font-semibold text-base">
                          {t("nav.howItWorksNav.item2.title")}
                        </span>
                        <span className="text-[#cccccc] text-sm">
                          {t("nav.howItWorksNav.item2.desc")}
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/merchant-acquiring"
                      onClick={closeMobileMenu}
                      className="flex items-start gap-3 p-3 hover:bg-[#ffc522]/10 rounded-lg transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-[#ffc522]/20 flex items-center justify-center flex-shrink-0">
                        <Wallet  className="text-[#ffc522] w-5 h-5" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-white font-semibold text-base">
                          {t("nav.howItWorksNav.item3.title")}
                        </span>
                        <span className="text-[#cccccc] text-sm">
                          {t("nav.howItWorksNav.item3.desc")}
                        </span>
                      </div>
                    </Link>

                   
                  </div>}
              </div>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="text-2xl text-white font-medium hover:text-[#ffc522] transition-colors"
              >
                {t("nav.contact")}
              </Link>

              {/* Mobile Language Selector */}
              <div className="pt-8 border-t border-[#ffc522]/30 w-full max-w-xs">
                <p className="text-[#cccccc] text-sm mb-4 text-center">
                  {t("nav.selectLanguage")}
                </p>
                <div className="flex justify-center gap-4">
                  {languages.map(language =>
                    <button
                      key={language.code}
                      onClick={() => {
                        handleSelect(language);
                        closeMobileMenu();
                      }}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${selectedLanguage.code ===
                      language.code
                        ? "bg-[#ffc522]/20 border-2 border-[#ffc522]"
                        : "border-2 border-transparent hover:border-[#ffc522]/50"}`}
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <span className="text-white text-sm font-medium">
                        {language.code}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </nav>
          </div>}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-32" />

         </>
    )
}

export default Header;