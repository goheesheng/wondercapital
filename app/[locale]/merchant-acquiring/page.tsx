
"use client"
import MarchantHeroSection from "@/app/components/merchant-acquiring/hero-section";
import MarchantUseCases from "@/app/components/merchant-acquiring/marchant-use-case";
import Overview from "@/app/components/merchant-acquiring/overview";
import ReadyToStart from "@/app/components/merchant-acquiring/ready-to-start";
import WhatYouGet from "@/app/components/merchant-acquiring/what-you-get";
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
const MerchantAcquiring = () =>{

 const HeroRef = useRef<HTMLElement>(null);
 const OverViewRef = useRef<HTMLElement>(null);
 const WhatYouGetRef = useRef<HTMLElement>(null);
 const ReadyToStartRef = useRef<HTMLElement>(null);
 const MarchantUseCaseRef = useRef<HTMLElement>(null);

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
      HeroRef.current,
      OverViewRef.current,
      WhatYouGetRef.current,
      ReadyToStartRef.current,
      MarchantUseCaseRef.current
    
    //   ctaRef.current
    ];

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


    return(
        <div className={`bg-[#090a0e] min-h-screen ${cabin.className}`}>

        <Header/>
        <MarchantHeroSection MarchantheroRef={HeroRef}/>
        <Overview overviewRef={OverViewRef}/>
       <WhatYouGet whatyougetRef={WhatYouGetRef}/>
       <MarchantUseCases MarchantUseCaseSecRef={MarchantUseCaseRef}/>
       <ReadyToStart ReadyToStartSecRef={ReadyToStartRef}/>
        <Footer/>
        </div>
    )
}


export default MerchantAcquiring;