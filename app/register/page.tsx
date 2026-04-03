"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HeadingContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "Selected Service";
  
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#2F2E2B] text-center uppercase tracking-wider">
        Get Started with {plan}
      </h1>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center">Loading...</div>}>
        <HeadingContent />
      </Suspense>
      <Footer />
    </div>
  );
}
