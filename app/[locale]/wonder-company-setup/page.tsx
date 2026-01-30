"use client"

import IncorporationHero from "@/app/components/wonder-setup/hero-section";
import TheProcess from "@/app/components/wonder-setup/process-section";
import ReadyToLuanch from "@/app/components/wonder-setup/ready-to-launch";
import WhatYouGetSection from "@/app/components/wonder-setup/what-you-get";
import WhyHereSection from "@/app/components/wonder-setup/why-here";
import WhyUs from "@/app/components/wonder-setup/why-us";
import Footer from "@/app/layouts/footer/footer";
import Header from "@/app/layouts/header/header";
import { Cabin } from "next/font/google";
import { useEffect, useRef } from "react";

// ============================================================================
// FONT CONFIGURATION
// ============================================================================
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap"
});
const WonderSetup = () => {


 const WhyUsRef = useRef<HTMLElement>(null);
 const WhatYouGet = useRef<HTMLElement>(null);
 const WhyHereRef = useRef<HTMLElement>(null);
 const TheProcessRef = useRef<HTMLElement>(null);
 const ReadyToLuanchRef = useRef<HTMLElement>(null);


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
      WhyUsRef.current,
      WhatYouGet.current,
      WhyHereRef.current,
       TheProcessRef.current,
       ReadyToLuanchRef.current,
    //   ctaRef.current
    ];

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  

  return (
    <div className={`bg-[#090a0e] min-h-screen ${cabin.className}`}>
      <Header />
      <IncorporationHero/>
      <WhyUs reff={WhyUsRef}/>
      <WhatYouGetSection whatYouGetRef={WhatYouGet}/>
      <WhyHereSection WhyHereSecRef={WhyHereRef}/>
      <TheProcess TheProcessSecRef={TheProcessRef}/>
      <ReadyToLuanch ReadyToLuanchSecRef={ReadyToLuanchRef}/>

      <Footer />
    </div>
  );
};

export default WonderSetup;
