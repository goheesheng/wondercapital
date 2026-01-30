import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Question = ({ QuestionRef }: any) => {
        const t = useTranslations("digitalPayment");
    
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  // ============================================================================
  // FAQ DATA
  // ============================================================================
  const faqs = [
    {
      question: t("questions.question1")
,
      answer: t("questions.answer1")
    },
    {
      question:t("questions.question2"),
      answer: t("questions.answer2")
      },
    {
      question:t("questions.question3"),
      answer:t("questions.answer3")
     },
    {
      question:t("questions.question4"),
      answer: t("questions.answer4")
    },
    {
      question: t("questions.question5"),
      answer: t("questions.answer5")
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={QuestionRef}
      className="py-8 lg:py-14 px-4 bg-[#0a0a0a] opacity-0 transition-all duration-1000"
      id="questions"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-base lg:text-xl font-semibold text-[#ffc522] tracking-wider mb-4 uppercase">
            {t("questions.badge")}
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[42px] leading-tight md:leading-tight text-white font-bold mb-4">
                        {t("questions.title")}

          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-[#ffc522] outline-none bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-2xl shadow-[#ffc522]/20"
                  : "border-[#272010] bg-[#0a0a0a] hover:border-[#ffc522]"
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:ring-[black] focus:ring-1"
              >
                <h3
                  className={`text-base md:text-lg lg:text-xl font-semibold pr-4 ${
                    openIndex === index ? "text-[#ffc522]" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#ffc522]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-[10px]">
                  <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;