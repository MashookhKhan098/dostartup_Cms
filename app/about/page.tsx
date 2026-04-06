"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, Shield, Clock, ThumbsUp, Award, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
 return (
 <>
 <Navbar />

 {/* Hero Section */}
 <section className="bg-[#F4F3EE] pt-12 pb-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="text-center max-w-4xl mx-auto">
 <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-6">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-[#C15F3C]">OUR STORY</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E2B] mb-6 leading-tight">
 Simplifying Business
 <span className="text-[#C15F3C]"> Compliance</span> for
 <span className="block">Indian Entrepreneurs</span>
 </h1>
 <p className="text-lg text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
 Expert guidance, fast processing, and reliable support to help you start,
 manage, and grow your business without the stress of legal complexities.
 </p>
 </div>
 </div>
 </section>

 {/* Main Content */}
 <section className="bg-white py-5">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">

 {/* Intro Card */}
 <div className="bg-[#F4F3EE] rounded-2xl p-8 md:p-10 mb-12 border border-[#E5E2DA]">
 <div className="max-w-4xl mx-auto text-center">
 <p className="text-lg text-[#2F2E2B] leading-relaxed">
 At <span className="text-[#C15F3C] font-semibold">DoStartup</span>, we're on a mission to transform how Indian
 entrepreneurs navigate the complex world of business compliance.
 Founded by industry experts with decades of combined experience,
 we combine deep regulatory knowledge with modern technology to
 deliver seamless, stress-free business solutions.
 </p>
 </div>
 </div>

 {/* Mission / Vision / Values - Enhanced */}
 <div className="grid md:grid-cols-3 gap-8 mb-16">
 <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E2DA] hover:shadow-md transition-shadow group">
 <div className="w-14 h-14 bg-[#F4F3EE] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C15F3C] transition-colors">
 <Award className="w-7 h-7 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h3 className="text-xl font-semibold text-[#2F2E2B] mb-3">
 Our Mission
 </h3>
 <p className="text-[#6F6B63] leading-relaxed">
 To empower every Indian entrepreneur with seamless access to business
 compliance services, eliminating complexity so they can focus entirely
 on building and scaling their ventures.
 </p>
 </div>

 <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E2DA] hover:shadow-md transition-shadow group">
 <div className="w-14 h-14 bg-[#F4F3EE] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C15F3C] transition-colors">
 <Users className="w-7 h-7 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h3 className="text-xl font-semibold text-[#2F2E2B] mb-3">
 Our Vision
 </h3>
 <p className="text-[#6F6B63] leading-relaxed">
 To become India's most trusted and innovative platform for business
 registration and compliance, recognized for our expertise, transparency,
 and unwavering commitment to customer success.
 </p>
 </div>

 <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E2DA] hover:shadow-md transition-shadow group">
 <div className="w-14 h-14 bg-[#F4F3EE] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C15F3C] transition-colors">
 <Shield className="w-7 h-7 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h3 className="text-xl font-semibold text-[#2F2E2B] mb-3">
 Our Values
 </h3>
 <p className="text-[#6F6B63] leading-relaxed">
 Transparency in every interaction, deep expertise in our field,
 customer-first approach in everything we do, and continuous innovation
 to serve you better.
 </p>
 </div>
 </div>

 {/* Stats Section - Enhanced */}
 <div className="bg-[#F4F3EE] rounded-2xl p-8 md:p-10 mb-16 border border-[#E5E2DA]">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-2">
 Our Impact in Numbers
 </h2>
 <p className="text-[#6F6B63]">
 Trusted by entrepreneurs across India
 </p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
 <div className="text-center">
 <p className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-2">2000+</p>
 <p className="text-sm text-[#6F6B63] font-medium">Startups Registered</p>
 </div>
 <div className="text-center">
 <p className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-2">1500+</p>
 <p className="text-sm text-[#6F6B63] font-medium">MSME / IEC Certifications</p>
 </div>
 <div className="text-center">
 <p className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-2">500+</p>
 <p className="text-sm text-[#6F6B63] font-medium">GST Filings</p>
 </div>
 <div className="text-center">
 <p className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-2">100+</p>
 <p className="text-sm text-[#6F6B63] font-medium">Licenses Delivered</p>
 </div>
 </div>
 </div>

 {/* Why Choose Us - Enhanced */}
 <div className="mb-16">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-3">
 Why Choose DoStartup?
 </h2>
 <p className="text-[#6F6B63] max-w-2xl mx-auto">
 We combine expertise, technology, and personalized support to deliver exceptional results
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E2DA] text-center hover:border-[#C15F3C] transition-all group">
 <div className="w-16 h-16 bg-[#F4F3EE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C15F3C] transition-colors">
 <Users className="w-8 h-8 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">
 Expert Guidance
 </h4>
 <p className="text-sm text-[#6F6B63]">
 Experienced CA & CS professionals to guide you at every step
 </p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E2DA] text-center hover:border-[#C15F3C] transition-all group">
 <div className="w-16 h-16 bg-[#F4F3EE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C15F3C] transition-colors">
 <Clock className="w-8 h-8 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">
 Fast Processing
 </h4>
 <p className="text-sm text-[#6F6B63]">
 Quick turnaround time without compromising quality
 </p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E2DA] text-center hover:border-[#C15F3C] transition-all group">
 <div className="w-16 h-16 bg-[#F4F3EE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C15F3C] transition-colors">
 <ThumbsUp className="w-8 h-8 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">
 Affordable Pricing
 </h4>
 <p className="text-sm text-[#6F6B63]">
 Transparent pricing with no hidden charges
 </p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E2DA] text-center hover:border-[#C15F3C] transition-all group">
 <div className="w-16 h-16 bg-[#F4F3EE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C15F3C] transition-colors">
 <CheckCircle className="w-8 h-8 text-[#C15F3C] group-hover:text-white transition-colors" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">
 Reliable Support
 </h4>
 <p className="text-sm text-[#6F6B63]">
 Dedicated support team ready to assist you anytime
 </p>
 </div>
 </div>
 </div>

 {/* Team Section */}
 <div className="mb-16">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-3">
 Meet Our Leadership
 </h2>
 <p className="text-[#6F6B63] max-w-2xl mx-auto">
 Passionate experts committed to your business success
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { name: "Rajesh Kumar", role: "Founder & CEO", experience: "15+ years in Corporate Law" },
 { name: "Priya Sharma", role: "Head of Compliance", experience: "12+ years in Tax & GST" },
 { name: "Amit Patel", role: "Technical Director", experience: "10+ years in Tech Solutions" }
 ].map((member, idx) => (
 <div key={idx} className="bg-white rounded-2xl p-6 text-center border border-[#E5E2DA] hover:shadow-md transition-shadow">
 <div className="w-24 h-24 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-full mx-auto mb-4 flex items-center justify-center">
 <Users className="w-12 h-12 text-white" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-1">{member.name}</h4>
 <p className="text-sm text-[#C15F3C] font-medium mb-2">{member.role}</p>
 <p className="text-xs text-[#6F6B63]">{member.experience}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Testimonial Section */}
 <div className="bg-[#F4F3EE] rounded-2xl p-8 md:p-10 mb-16 border border-[#E5E2DA]">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-2">
 What Our Clients Say
 </h2>
 <p className="text-[#6F6B63]">
 Join thousands of satisfied entrepreneurs
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white rounded-xl p-6 border border-[#E5E2DA]">
 <div className="flex items-center gap-1 mb-3">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
 ))}
 </div>
 <p className="text-[#6F6B63] mb-4">
 "DoStartup made company registration incredibly easy. Their team guided us through every step, and we had our certificate in just 5 days!"
 </p>
 <div>
 <p className="font-semibold text-[#2F2E2B]">Neha Gupta</p>
 <p className="text-xs text-[#B1ADA1]">Founder, TechInnovate Solutions</p>
 </div>
 </div>
 <div className="bg-white rounded-xl p-6 border border-[#E5E2DA]">
 <div className="flex items-center gap-1 mb-3">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
 ))}
 </div>
 <p className="text-[#6F6B63] mb-4">
 "Excellent service! Got my GST registration done within a week. The team is very professional and responsive."
 </p>
 <div>
 <p className="font-semibold text-[#2F2E2B]">Vikram Singh</p>
 <p className="text-xs text-[#B1ADA1]">Director, VK Enterprises</p>
 </div>
 </div>
 </div>
 </div>

 {/* CTA Section - Enhanced */}
 <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-2xl p-8 md:p-12 text-center">
 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
 Ready to Start Your Business?
 </h3>
 <p className="text-white/90 mb-6 max-w-2xl mx-auto">
 Join thousands of successful entrepreneurs who trusted DoStartup
 for their business compliance needs
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <button className="bg-white text-[#C15F3C] hover:bg-[#F4F3EE] text-sm font-medium px-8 py-3 rounded-lg transition shadow-md flex items-center justify-center gap-2 group">
 Get Started Today
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </button>
 <button className="border-2 border-white text-white hover:bg-white hover:text-[#C15F3C] text-sm font-medium px-8 py-3 rounded-lg transition">
 Contact Our Team
 </button>
 </div>
 </div>

 {/* Trust Badges */}
 <div className="mt-12 pb-0">
 <div className="flex items-center justify-center gap-6 flex-wrap">
 <div className="flex items-center gap-2">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={16} className="fill-[#C15F3C] text-[#C15F3C]" />
 ))}
 <span className="text-sm text-[#6F6B63]">Trusted by 2000+ Businesses</span>
 </div>
 <div className="w-px h-6 bg-[#E5E2DA]" />
 <div className="flex items-center gap-2">
 <Shield className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#6F6B63]">100% Secure & Confidential</span>
 </div>
 <div className="w-px h-6 bg-[#E5E2DA]" />
 <div className="flex items-center gap-2">
 <CheckCircle className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#6F6B63]">Money-back Guarantee</span>
 </div>
 </div>
 </div>
 </div>
 </section>

 <Footer />
 </>
 );
}
