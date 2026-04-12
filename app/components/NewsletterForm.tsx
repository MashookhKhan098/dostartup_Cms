"use client";

import { useState } from "react";

interface NewsletterFormProps {
  layout?: "horizontal" | "vertical";
  inputClassName?: string;
  buttonClassName?: string;
  wrapperClassName?: string;
  placeholder?: string;
}

export default function NewsletterForm({
  layout = "horizontal",
  inputClassName,
  buttonClassName,
  wrapperClassName,
  placeholder = "Enter your email"
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        if (res.status === 201) {
          setEmail(""); // clear only if perfectly new
        }
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong");
    }
  };

  const containerClass = wrapperClassName !== undefined ? wrapperClassName : (
    layout === "horizontal" 
      ? "flex flex-col sm:flex-row w-full flex-1 gap-2" 
      : "flex flex-col w-full gap-2"
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className={containerClass}>
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          required
          // Using default style mimicking footer if not provided
          className={inputClassName !== undefined ? inputClassName : "flex-1 w-full px-4 py-2.5 bg-white border border-[#E5E2DA] rounded-xl text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"}
        />
        <button 
          type="submit" 
          disabled={status === "loading"}
          // Using default style mimicking footer if not provided
          className={buttonClassName !== undefined ? buttonClassName : "w-full sm:w-auto px-5 py-2.5 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-[11px] font-medium ${status === "success" ? "text-green-600" : "text-[#d14444]"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
