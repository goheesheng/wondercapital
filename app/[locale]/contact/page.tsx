"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  User,
  Mail,
  Building2,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORM_API,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          subject: `[WonderCapital] ${formData.subject}`,
          message: formData.message,
          to: "noreply@wondercapital.tech",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus("idle");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const subjects = [
    { value: "general", label: t("form.subjects.general") },
    { value: "partnership", label: t("form.subjects.partnership") },
    { value: "support", label: t("form.subjects.support") },
    { value: "enterprise", label: t("form.subjects.enterprise") },
    { value: "other", label: t("form.subjects.other") },
  ];

  return (
    <main className="min-h-screen bg-[#090a0e] pt-24 pb-20">
      <div
        ref={sectionRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#ffc522]/10 text-[#ffc522] text-sm font-medium tracking-widest rounded-full mb-6">
            {t("badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-[#cccccc] max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#191919] rounded-2xl p-8 md:p-12 border border-[#2a2a2a]">
          {submitStatus === "success" ? (
            /* Success State */
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t("success.title")}
              </h2>
              <p className="text-[#cccccc] mb-8 max-w-md mx-auto">
                {t("success.message")}
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-3 bg-[#ffc522] text-black font-semibold rounded-lg hover:bg-[#ffc522]/90 transition-colors"
              >
                {t("success.sendAnother")}
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-500 text-sm">{t("error.message")}</p>
                </div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t("form.firstName")} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t("form.firstNamePlaceholder")}
                      required
                      minLength={2}
                      className="w-full pl-12 pr-4 py-3 bg-[#090a0e] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#ffc522] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t("form.lastName")} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t("form.lastNamePlaceholder")}
                      required
                      minLength={2}
                      className="w-full pl-12 pr-4 py-3 bg-[#090a0e] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#ffc522] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {t("form.email")} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("form.emailPlaceholder")}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[#090a0e] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#ffc522] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {t("form.company")}
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t("form.companyPlaceholder")}
                    className="w-full pl-12 pr-4 py-3 bg-[#090a0e] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#ffc522] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {t("form.subject")} *
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#090a0e] border border-[#2a2a2a] rounded-lg text-white appearance-none focus:border-[#ffc522] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="" disabled>
                      {t("form.subjectPlaceholder")}
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.label}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {t("form.message")} *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.messagePlaceholder")}
                    required
                    minLength={10}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-[#090a0e] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#ffc522] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#ffc522] text-black font-semibold rounded-lg hover:bg-[#ffc522]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("form.sending") : t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
