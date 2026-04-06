"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

const LiveChatCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-28 max-w-[400px] mx-auto lg:ml-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-[#8B4513] leading-tight">
          Live chat with experts
        </h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Connect instantly with a compliance professional on WhatsApp.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
          className="w-full bg-[#8B4513] text-white py-3.5 rounded-xl font-semibold hover:bg-[#723a10] transition-all flex items-center justify-center gap-2 mt-2 shadow-md shadow-[#8B4513]/10"
        >
          <span>Chat now</span>
        </button>
      </div>
    </div>
  );
};

export default LiveChatCard;
