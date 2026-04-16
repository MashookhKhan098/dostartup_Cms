"use client";
import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";

/**
 * SidebarCart Component - Exact match for the CA Support inline cart widget.
 */
const SidebarCart = () => {
  const [gstChecked, setGstChecked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 w-full transition-all">
      <div className="text-center text-gray-600">
        <img
          src="/images/cart.png"
          alt="cart"
          className="mx-auto h-12 w-auto mb-3"
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        <h3 className="font-semibold text-slate-900">Your cart is empty</h3>
        <p className="text-sm mt-2 text-gray-600">
          Browse our services and add some services in cart!
        </p>
      </div>

      <div className="mt-6 text-center">
        <div className="text-sm text-gray-500">
          Existing User?{" "}
          <a className="text-[#C15F3C] underline hover:text-[#A94E30] font-medium cursor-pointer">
            Login
          </a>
        </div>
      </div>

      <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
          placeholder="Name"
        />
        <input
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
          placeholder="Email"
        />
        <div className="flex gap-2">
          <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
            <img src="/images/india-flag.png" alt="flag" className="h-4" onError={(e) => e.currentTarget.style.display='none'} />
            <span className="text-sm">+91</span>
          </div>
          <input
            className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
            placeholder="Phone"
          />
        </div>

        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={gstChecked}
            onChange={() => setGstChecked((s) => !s)}
            className="w-4 h-4 accent-[#C15F3C]"
          />
          <span className="text-gray-600">Enter GSTIN to get 18% GST Credit</span>
        </label>

        {gstChecked && (
          <input
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
            placeholder="GSTIN"
          />
        )}

        <button className="w-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:from-[#A94E30] hover:to-[#8F3F27] transition-all shadow-md mt-4">
          <ShoppingBag size={16} /> Get Started
        </button>
      </form>
      
      {/* Security Info */}
      <div className="mt-4 text-center">
         <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">
           Secure . No spam . Instant confirmation
         </p>
      </div>
    </div>
  );
};

export default SidebarCart;
