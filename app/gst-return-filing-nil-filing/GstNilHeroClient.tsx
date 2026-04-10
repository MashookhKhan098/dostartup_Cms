"use client";

import Hero from "../components/Gst/Hero2";
import { supabase } from "../../lib/supabase";

export default function GstNilHeroClient({ heroProps }: any) {
  const handleSubmit = async (formData: any) => {
    const { error } = await supabase.from("gst_nil_filings").insert([
      {
        gstin: formData.gstin || null,
        username: formData.username || null,
        upload_consent: formData.upload_consent || false,
        status: "submitted",
      },
    ]);

    if (error) {
      console.error(error);
      alert("Submission failed ❌");
      return;
    }

    alert("NIL GST Return submitted successfully 🚀");
  };

  return <Hero {...heroProps} onSubmit={handleSubmit} />;
}
