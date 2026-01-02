// // app/components/HeroSection.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image: "/images/hero1.jpg",
//     // title: "TDS Filing & Form 16 Issuance",
//     // subtitle: "Simplify with DoStartup",
//   },
//   {
//     image: "/images/hero2.jpg",
//     // title: "Start Your Business Easily",
//     // subtitle: "Incorporation Made Simple",
//   },
//   {
//     image: "/images/hero3.jpg",
//     // title: "Manage Compliance Effortlessly",
//     // subtitle: "Reliable Support with DoStartup",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () =>
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   const nextSlide = () =>
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="relative rounded-xl overflow-hidden">
//           {/* Slide */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-[380px] md:h-[460px] object-cover"
//           />
//           {/* Overlay - Removed */}
//           {/* <div className="absolute inset-0 bg-green-900/50 flex items-center">
//             <div className="px-8 md:px-16 text-white max-w-lg">
//               <h2 className="text-xl md:text-2xl font-semibold mb-3">
//                 {slides[current].title}
//               </h2>
//               <p className="text-sm md:text-base">{slides[current].subtitle}</p>
//               <div className="mt-4 flex gap-3">
//                 <img src="/images/playstore.png" alt="Google Play" className="h-10" />
//                 <img src="/images/appstore.png" alt="App Store" className="h-10" />
//               </div>
//             </div>
//           </div> */}

//           {/* Navigation */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
//           >
//             <ChevronLeft className="h-5 w-5 text-gray-700" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
//           >
//             <ChevronRight className="h-5 w-5 text-gray-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STRAPI_URL = "http://localhost:1337";

export default function HeroSection() {
  const [images, setImages] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  // Fetch images from Strapi
  useEffect(() => {
    fetch(`${STRAPI_URL}/api/hero-slide?populate=images`)
      .then((res) => res.json())
      .then((json) => {
        setImages(json.data?.images || []);
      });
  }, []);

  // Auto slide every 5 sec
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  const imageUrl = images[current]?.url;

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative rounded-xl overflow-hidden">

          {/* Slide */}
          {imageUrl && (
            <img
              src={`${STRAPI_URL}${imageUrl}`}
              alt="Hero Slide"
              className="w-full h-[380px] md:h-[460px] object-cover"
            />
          )}

          {/* Left Button */}
          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Right Button */}
          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

        </div>
      </div>
    </section>
  );
}
