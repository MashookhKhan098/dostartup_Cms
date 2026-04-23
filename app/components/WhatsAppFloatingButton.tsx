"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    
    // Show tooltip after another delay
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    
    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "919999644807";
    const message = "Hi, I'm interested in your services and would like to know more.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <div className="flex flex-col items-end gap-3">
            {/* Tooltip / Prompt */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10, x: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, x: 20 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[240px] pointer-events-auto relative mb-1"
                >
                  <button 
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={12} />
                  </button>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-gray-900 leading-tight">Expert Support</p>
                      <p className="text-[11px] text-gray-600 mt-1">Chat with us on WhatsApp for instant assistance!</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsAppClick}
              className="pointer-events-auto bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 group relative"
            >
              {/* Pulse Effects */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-40 group-hover:hidden" />
              
              <MessageCircle size={28} className="relative z-10" strokeWidth={2.5} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppFloatingButton;
