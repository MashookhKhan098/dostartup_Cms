"use client";

import Hero from "../components/Gst/Hero2";
import { supabase } from "../../lib/supabase";

export default function GstHeroClient({ heroProps }: any) {
  const handleSubmit = async (formData: any) => {
    const { error } = await supabase.from("gst_forms").insert([
      {
        form_type: "GST RETURN FILING",
        gstin: formData.gstin || null,
        state: formData.state || null,
        pan: formData.pan || null,
        nature_of_business: formData.nature_of_business || null,
        package: formData.package || null,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Submission failed ❌");
      return;
    }

    alert("GST Return submitted successfully 🚀");
  };

  return <Hero {...heroProps} onSubmit={handleSubmit} />;
}