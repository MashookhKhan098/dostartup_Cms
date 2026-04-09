"use client";
import React, { useState } from "react";
import { ShoppingCart, Shield, Briefcase } from "lucide-react";

const SidebarCart = () => {
  const [gstChecked, setGstChecked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-[#E5E2DA] p-8 sticky top-28 max-w-[400px] mx-auto lg:ml-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="mb-6">
          <img src="/images/cart.png" alt="empty cart" className="h-16 w-auto" />
        </div>
        <h3 className="text-2xl font-bold text-[#202939] mb-2 tracking-tight">Your cart is empty</h3>
        <p className="text-[#4B5565] text-lg leading-relaxed">Browse services and add to cart!</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <input 
            className="w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-base placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#C15F3C]/10 focus:border-[#C15F3C] transition-all outline-none text-[#202939]" 
            placeholder="Name" 
          />
        </div>
        <div className="space-y-1">
          <input 
            className="w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-base placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#C15F3C]/10 focus:border-[#C15F3C] transition-all outline-none text-[#202939]" 
            placeholder="Email" 
          />
        </div>
        <div className="flex gap-2">
          <div className="bg-white border border-[#E5E7EB] rounded-lg px-3 py-3.5 text-base font-medium text-[#202939] flex items-center gap-2 shrink-0">
            <span className="opacity-70">🇮🇳</span> +91
          </div>
          <input 
            className="flex-1 w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-base placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#C15F3C]/10 focus:border-[#C15F3C] transition-all outline-none text-[#202939]" 
            placeholder="Phone number" 
          />
        </div>

        <div className="pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                checked={gstChecked}
                onChange={() => setGstChecked((s) => !s)}
                className="w-5 h-5 rounded border-[#D1D5DB] bg-white text-[#C15F3C] focus:ring-offset-0 focus:ring-0 cursor-pointer"
              />
            </div>
            <span className="text-[15px] font-medium text-[#4B5565] group-hover:text-[#202939] transition-colors">Enter GSTIN to get 18% GST Credit</span>
          </label>
        </div>

        {gstChecked && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <input 
              className="w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-base placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#C15F3C]/10 focus:border-[#C15F3C] transition-all outline-none text-[#202939]" 
              placeholder="Enter GSTIN" 
            />
          </div>
        )}

        <button className="w-full bg-[#C15F3C] text-white py-4 rounded-xl font-bold hover:bg-[#A94E30] transition-all shadow-lg shadow-[#C15F3C]/20 flex items-center justify-center gap-2.5 mt-6 text-xl">
          <Briefcase size={20} className="text-white" />
          Get Started
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-3 text-[#2F2E2B]">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <Shield size={20} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-tight">Expert Verified</p>
            <p className="text-[10px] text-[#6F6B63]">100% Secure Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCart;
