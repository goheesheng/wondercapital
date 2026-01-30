"use client"
import CompanyCard from "@/app/components/digital-payments/company-card";
import DigitalPaymentHeroSec from "@/app/components/digital-payments/hero-section";
import PaymentLinks from "@/app/components/digital-payments/payment-links";
import Question from "@/app/components/digital-payments/questions";
import ReadyToStream from "@/app/components/digital-payments/ready-to-streamline";
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
const DigitalPayments = () =>{
   const HeroRef = useRef<HTMLElement>(null);
   const paymentLinkRef = useRef<HTMLElement>(null);
   const companyRef = useRef<HTMLElement>(null);
   const QuestionSecRef = useRef<HTMLElement>(null);
 const ReadyToStreamRef= useRef<HTMLElement>(null);
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
      paymentLinkRef.current,
      companyRef.current,
      QuestionSecRef.current,
      ReadyToStreamRef.current
      
    
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
        <DigitalPaymentHeroSec DigiHeroRef={HeroRef}/>
        <PaymentLinks PaymetLinksRef={paymentLinkRef}/>
        <CompanyCard CompanyCardRef={companyRef}/>
        <Question QuestionRef={QuestionSecRef}/>
        <ReadyToStream ReadyToStreamSecRef={ReadyToStreamRef}/>

        <Footer/>
        </div>
    )
}


export default DigitalPayments;