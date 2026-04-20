"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STRAPI_URL = "https://cms.dostartup.in";

export default function HeroSection() {
  const [images, setImages] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const TOKEN = "API-217623942d11b9d6bc4576ea8b24b38";
    fetch(`${STRAPI_URL}/api/content/item/heroslide?token=${TOKEN}`)
      .then((res) => res.json())
      .then((json) => setImages(json.images || []));
  }, []);

  const slideContent = [
    {
      title: "Company Registration Made Simple",
      desc: "Start your Private Limited, LLP, or OPC quickly with expert assistance and full compliance support.",
    },
    {
      title: "Trademark & Brand Protection",
      desc: "Secure your brand identity with our fast and reliable trademark registration services.",
    },
    {
      title: "GST & Tax Compliance",
      desc: "Stay compliant with GST filings, tax registrations, and expert CA support for your business.",
    },
    {
      title: "Legal & Startup Advisory",
      desc: "Get professional guidance for contracts, compliance, and startup legal frameworks.",
    },
  ];

  const slideTo = useCallback((idx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 280);
  }, []);

  const goNext = useCallback(() => {
    if (!images.length) return;
    slideTo(current === images.length - 1 ? 0 : current + 1);
  }, [current, images.length, slideTo]);

  const goPrev = useCallback(() => {
    if (!images.length) return;
    slideTo(current === 0 ? images.length - 1 : current - 1);
  }, [current, images.length, slideTo]);

  useEffect(() => {
    if (!images.length || isHovered) return;

    const t = setInterval(goNext, 2000);

    return () => clearInterval(t);
  }, [goNext, images.length, isHovered]);

  if (!images.length) return null;

  const trustBadges = ["10,000+ Clients", "Expert CAs", "100% Online", "Govt Approved"];

  const path = images[current]?.path;
  const imageUrl = path ? `${STRAPI_URL}/storage/uploads${path.startsWith('/') ? path : '/' + path}` : null;

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');

        .slider-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(193,95,60,0.12) 0%, transparent 50%, rgba(26,23,20,0.35) 100%);
          pointer-events: none;
          border-radius: 20px;
        }
      `}</style>

      <section className="bg-[#F4F3EE] px-[20px] py-1 sm:px-[28px] sm:py-2 lg:px-[52px] lg:p-3">
        <div className="max-w-[1224px] mx-auto flex flex-col md:grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-5 md:gap-7 lg:gap-9">

          {/* SLIDER */}
          <div
            className="relative rounded-2xl overflow-hidden bg-[#1a1714] aspect-[16/9] sm:aspect-[16/8] md:aspect-auto md:min-h-[340px] lg:min-h-[400px] w-full slider-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={`Slide ${current + 1}`}
                className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
              />
            )}

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-5 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <h2 className="font-['Sora'] text-white text-lg sm:text-xl font-semibold mb-1">
                {slideContent[current]?.title}
              </h2>
              <p className="text-white/90 text-xs sm:text-sm max-w-lg">
                {slideContent[current]?.desc}
              </p>
            </div>

            {/* NAV BUTTONS */}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3.5 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm text-white hover:bg-[#C15F3C] hover:scale-105 transition-all"
              onClick={goPrev}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3.5 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm text-white hover:bg-[#C15F3C] hover:scale-105 transition-all"
              onClick={goNext}
            >
              <ChevronRight size={18} />
            </button>

            {/* DOTS */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i === current ? "bg-[#C15F3C] w-5" : "bg-[#F5F5F5]/50 w-1.5"
                      }`}
                    onClick={() => slideTo(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* SIDE PANEL */}
          <div id="registration-form" className="hidden md:flex flex-col gap-3.5">
            <div className="bg-white rounded-2xl p-5 border border-[#B1ADA1]/25 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex-1">
              <p className="font-['Sora'] text-[10px] font-semibold uppercase text-[#B1ADA1] mb-1.5">
                Most Popular
              </p>
              <p className="font-['Sora'] text-base font-semibold text-[#1a1714] mb-1">
                Start Your Business Today
              </p>
              <p className="text-xs text-[#7a7570] mb-4">
                Private Limited, LLP, OPC — registered fast with expert support.
              </p>

              <div className="flex gap-2">
                <button className="px-4 py-2.5 rounded-lg bg-[#C15F3C] text-white text-xs font-semibold hover:bg-[#a84e30] transition">
                  Get Started
                </button>

                <button className="px-4 py-2.5 rounded-lg border border-[#C15F3C] text-[#C15F3C] text-xs font-semibold hover:bg-[#C15F3C] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#B1ADA1]/25 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <p className="font-['Sora'] text-[10px] uppercase text-[#B1ADA1] mb-3">
                Why doStartup
              </p>

              <div className="grid grid-cols-2 gap-2">
                {trustBadges.map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-black bg-white rounded-lg py-2 px-3 text-[11px] font-semibold border border-[#B1ADA1]/20">
                    <span className="w-2 h-2 rounded-full bg-[#C15F3C]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
