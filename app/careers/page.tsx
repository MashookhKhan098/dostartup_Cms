"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
 Star, MapPin, Briefcase, Users, Award, Clock,
 Calendar, FileText, CheckCircle, ArrowRight,
 Mail, Phone, Building, TrendingUp, Shield,
 Sparkles, Target, Heart, Zap
} from "lucide-react";

export default function CareersPage() {
 return (
 <>
 <Navbar />

 {/* Hero Section */}
 <section className="bg-[#F4F3EE] pt-12 pb-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="text-center max-w-4xl mx-auto">
 <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-6">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-[#C15F3C]">JOIN OUR TEAM</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E2B] mb-6 leading-tight">
 Start Your Career with
 <span className="text-[#C15F3C]"> DoStartup</span>
 </h1>
 <p className="text-lg text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
 Walk-in to any of our offices Monday–Saturday, 9AM–7PM to explore opportunities
 and meet our Recruiters. Same-day offer letters available!
 </p>
 <div className="flex flex-wrap justify-center gap-4 mt-8">
 <div className="flex items-center gap-2 bg-[#F4F3EE] rounded-lg px-4 py-2 shadow-sm">
 <Calendar className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#2F2E2B]">Daily Walk-in Interviews</span>
 </div>
 <div className="flex items-center gap-2 bg-[#F4F3EE] rounded-lg px-4 py-2 shadow-sm">
 <Clock className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#2F2E2B]">Same-day Offer Letters</span>
 </div>
 <div className="flex items-center gap-2 bg-[#F4F3EE] rounded-lg px-4 py-2 shadow-sm">
 <Users className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#2F2E2B]">600+ Team Members</span>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Main Content */}
 <section className="bg-[#F4F3EE] py-5">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">

 {/* AI Assessment Banner */}
 <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-2xl p-6 md:p-8 mb-12 text-white">
 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
 <div className="flex items-center gap-4">
 <div className="bg-[#F4F3EE]/20 rounded-full p-3">
 <Sparkles className="w-8 h-8" />
 </div>
 <div>
 <h3 className="text-xl font-bold mb-1">AI Assisted Assessment</h3>
 <p className="text-white/90">Complete your assessment online using our AI platform</p>
 </div>
 </div>
 <button className="bg-[#F4F3EE] text-[#C15F3C] hover:bg-[#F4F3EE] px-6 py-2 rounded-lg font-medium transition">
 Start Assessment
 </button>
 </div>
 </div>

 {/* Recruitment Process */}
 <div className="mb-16">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-3">
 Recruitment Process
 </h2>
 <p className="text-[#6F6B63] max-w-2xl mx-auto">
 Simple, transparent, and efficient - join our team in 3 easy steps
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="bg-[#F4F3EE] rounded-2xl p-6 text-center border border-[#E5E2DA] relative">
 <div className="w-12 h-12 bg-[#C15F3C] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
 1
 </div>
 <h3 className="text-lg font-semibold text-[#2F2E2B] mb-2">AI Assessment</h3>
 <p className="text-sm text-[#6F6B63]">
 Complete your assessment online using LEDGERS AI platform. Once complete, a Recruiter will reach out.
 </p>
 </div>
 <div className="bg-[#F4F3EE] rounded-2xl p-6 text-center border border-[#E5E2DA] relative">
 <div className="w-12 h-12 bg-[#C15F3C] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
 2
 </div>
 <h3 className="text-lg font-semibold text-[#2F2E2B] mb-2">Attend Interview</h3>
 <p className="text-sm text-[#6F6B63]">
 Complete the job application and attend 2 interviews on the same day. If selected, job offer extended same day.
 </p>
 </div>
 <div className="bg-[#F4F3EE] rounded-2xl p-6 text-center border border-[#E5E2DA]">
 <div className="w-12 h-12 bg-[#C15F3C] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
 3
 </div>
 <h3 className="text-lg font-semibold text-[#2F2E2B] mb-2">Build Your Career!</h3>
 <p className="text-sm text-[#6F6B63]">
 Bring required documents, receive 10-day training, and start your journey with us!
 </p>
 </div>
 </div>
 </div>

 {/* Job Application Form */}
 <div className="bg-[#F4F3EE] rounded-2xl border border-[#E5E2DA] p-6 md:p-8 mb-16 shadow-sm">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-2">Job Application</h2>
 <p className="text-[#6F6B63]">Fill out the form below to apply for your desired role</p>
 </div>
 <form className="grid md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Full Name *</label>
 <input
 type="text"
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Enter your full name"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Email *</label>
 <input
 type="email"
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Enter your email"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Phone *</label>
 <input
 type="tel"
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Enter your phone number"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Address *</label>
 <input
 type="text"
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Enter your full address"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Role *</label>
 <select className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]">
 <option>Select a role</option>
 <option>Sales Executive</option>
 <option>Service Associate</option>
 <option>Accountant</option>
 <option>Frontend Developer</option>
 <option>Backend Developer</option>
 <option>Business Consultant</option>
 <option>Customer Support Executive</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Experience (Years) *</label>
 <input
 type="number"
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Years of experience"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Salary Expectation (₹) *</label>
 <input
 type="text"
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Expected CTC"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Preferred Office Location *</label>
 <select className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]">
 <option>Select location</option>
 <option>Mumbai - Mahape</option>
 <option>Chennai - Chetpet</option>
 <option>Chennai - Guindy</option>
 <option>Remote</option>
 </select>
 </div>
 <div className="md:col-span-2">
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Tell us about yourself *</label>
 <textarea
 rows={4}
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Share your background, skills, and why you want to join DoStartup"
 />
 </div>
 <div className="md:col-span-2">
 <button className="w-full bg-[#C15F3C] hover:bg-[#A94E30] text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2">
 Submit Application <ArrowRight className="w-4 h-4" />
 </button>
 </div>
 </form>
 </div>

 {/* Open Positions Section */}
 <div className="mb-16">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-3">
 Open Positions
 </h2>
 <p className="text-[#6F6B63] max-w-2xl mx-auto">
 Join our growing team and make an impact
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-4">
 {[
 { title: "Sales Executive", type: "Full Time", location: "Multiple Locations", experience: "0-3 years" },
 { title: "Service Associate", type: "Full Time", location: "Multiple Locations", experience: "0-2 years" },
 { title: "Accountant", type: "Full Time", location: "Chennai/Mumbai", experience: "1-4 years" },
 { title: "Frontend Developer", type: "Full Time", location: "Remote", experience: "2-5 years" },
 { title: "Business Consultant", type: "Full Time", location: "Multiple Locations", experience: "2-6 years" },
 { title: "Customer Support Executive", type: "Full Time", location: "Remote", experience: "0-2 years" }
 ].map((job, idx) => (
 <div key={idx} className="bg-[#F4F3EE] rounded-xl p-5 border border-[#E5E2DA] hover:border-[#C15F3C] transition-all hover:shadow-md">
 <div className="flex justify-between items-start mb-3">
 <h4 className="text-lg font-semibold text-[#2F2E2B]">{job.title}</h4>
 <span className="text-xs bg-[#F4F3EE] text-[#C15F3C] px-2 py-1 rounded-full">{job.type}</span>
 </div>
 <div className="space-y-2 mb-4">
 <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
 <MapPin className="w-4 h-4" />
 <span>{job.location}</span>
 </div>
 <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
 <Briefcase className="w-4 h-4" />
 <span>Experience: {job.experience}</span>
 </div>
 </div>
 <button className="w-full bg-[#C15F3C] hover:bg-[#A94E30] text-white px-4 py-2 rounded-lg text-sm transition">
 Apply Now
 </button>
 </div>
 ))}
 </div>
 </div>

 {/* Interview Preparation */}
 <div className="grid lg:grid-cols-2 gap-8 mb-16">
 <div className="bg-[#F4F3EE] rounded-2xl p-6 border border-[#E5E2DA]">
 <h3 className="text-xl font-bold text-[#2F2E2B] mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-[#C15F3C]" />
 Interview Preparation
 </h3>
 <p className="text-[#6F6B63] mb-4">
 Walk-in prepared with the following documents. Expect to spend 2–4 hours at our office for the interview process.
 </p>
 <ul className="space-y-3">
 {[
 "PAN & Aadhaar Card",
 "Experience Letter (if previously employed)",
 "Resume – Mandatory",
 "Marksheets Original/Copy"
 ].map((item, idx) => (
 <li key={idx} className="flex items-center gap-2 text-sm text-[#2F2E2B]">
 <CheckCircle className="w-4 h-4 text-[#C15F3C]" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 <div className="bg-[#F4F3EE] rounded-2xl p-6 border border-[#E5E2DA]">
 <h3 className="text-xl font-bold text-[#2F2E2B] mb-4 flex items-center gap-2">
 <Shield className="w-5 h-5 text-[#C15F3C]" />
 Mandatory Requirements
 </h3>
 <ul className="space-y-3">
 {[
 "90% or above in 10th or 12th Standard, OR Cleared CA Inter / CS Inter",
 "Bachelor's Degree (any discipline)",
 "Working knowledge of Income Tax & GST",
 "Professional & Ethical Conduct",
 "Background Verification is Mandatory"
 ].map((item, idx) => (
 <li key={idx} className="flex items-start gap-2 text-sm text-[#2F2E2B]">
 <CheckCircle className="w-4 h-4 text-[#C15F3C] mt-0.5 flex-shrink-0" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Office Locations */}
 <div className="mb-16">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-3">
 Our Offices
 </h2>
 <p className="text-[#6F6B63]">
 Daily Walk-in Interviews (Mon–Sat 9AM to 7PM)
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="bg-[#F4F3EE] rounded-2xl p-6 border border-[#E5E2DA]">
 <div className="w-12 h-12 bg-[#F4F3EE] rounded-lg flex items-center justify-center mb-4">
 <Building className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">Mumbai Office</h4>
 <p className="text-sm text-[#6F6B63] mb-3">
 DoStartup, 6th Floor, MBP, Mahape<br />
 Navi Mumbai, Maharashtra – 400710
 </p>
 <div className="flex items-center gap-2 text-sm text-[#C15F3C]">
 <Phone className="w-4 h-4" />
 <span>+91 89398 50314</span>
 </div>
 </div>

 <div className="bg-[#F4F3EE] rounded-2xl p-6 border border-[#E5E2DA]">
 <div className="w-12 h-12 bg-[#F4F3EE] rounded-lg flex items-center justify-center mb-4">
 <Building className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">Chennai – Chetpet</h4>
 <p className="text-sm text-[#6F6B63] mb-3">
 KRM Center – 6th Floor, Shoppers Stop Building<br />
 Harrington Road, Chetpet, Chennai – 600031
 </p>
 <div className="flex items-center gap-2 text-sm text-[#C15F3C]">
 <Phone className="w-4 h-4" />
 <span>+91 89398 50314</span>
 </div>
 </div>

 <div className="bg-[#F4F3EE] rounded-2xl p-6 border border-[#E5E2DA]">
 <div className="w-12 h-12 bg-[#F4F3EE] rounded-lg flex items-center justify-center mb-4">
 <Building className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <h4 className="text-lg font-semibold text-[#2F2E2B] mb-2">Chennai – Guindy</h4>
 <p className="text-sm text-[#6F6B63] mb-3">
 RR Tower IV, Thiru Vi Ka Industrial Estate<br />
 SIDCO Industrial Estate, Guindy, Chennai – 600032
 </p>
 <div className="flex items-center gap-2 text-sm text-[#C15F3C]">
 <Phone className="w-4 h-4" />
 <span>+91 89398 50314</span>
 </div>
 </div>
 </div>
 <div className="text-center mt-6">
 <a href="#" className="text-[#C15F3C] hover:text-[#A94E30] text-sm font-medium inline-flex items-center gap-1">
 <Mail className="w-4 h-4" />
 careers@dostartup.com
 </a>
 </div>
 </div>

 {/* Working at DoStartup */}
 <div className="bg-[#F4F3EE] rounded-2xl p-8 mb-16 border border-[#E5E2DA]">
 <div className="grid lg:grid-cols-2 gap-8">
 <div>
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-4">Working at DoStartup</h2>
 <p className="text-[#6F6B63] leading-relaxed mb-4">
 At DoStartup we're passionate about building technology that solves real problems.
 We continue to invest heavily into our digital capabilities to help us achieve our
 mission of delivering quality services at scale at an affordable price-point.
 </p>
 <p className="text-[#6F6B63] leading-relaxed">
 We cater to the growth of our employees and provide encouragement to expand their
 knowledge on various financial services we provide to our customers.
 </p>
 </div>
 <div className="grid grid-cols-2 gap-4">
 <div className="text-center">
 <p className="text-2xl font-bold text-[#C15F3C]">600+</p>
 <p className="text-xs text-[#6F6B63]">Team Members</p>
 </div>
 <div className="text-center">
 <p className="text-2xl font-bold text-[#C15F3C]">100K+</p>
 <p className="text-xs text-[#6F6B63]">Business Customers</p>
 </div>
 <div className="text-center">
 <p className="text-2xl font-bold text-[#C15F3C]">1.6M+</p>
 <p className="text-xs text-[#6F6B63]">Platform Users</p>
 </div>
 <div className="text-center">
 <p className="text-2xl font-bold text-[#C15F3C]">2014</p>
 <p className="text-xs text-[#6F6B63]">Year Founded</p>
 </div>
 </div>
 </div>
 </div>

 {/* Our Values */}
 <div className="mb-16">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-3">
 Our Core Values
 </h2>
 <p className="text-[#6F6B63] max-w-2xl mx-auto">
 Principles that guide everything we do
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {[
 { icon: TrendingUp, title: "Premium Quality", desc: "Deliver simple, fast, and error-free services" },
 { icon: Target, title: "Affordable Prices", desc: "Building services that deliver true value" },
 { icon: Shield, title: "Simple & Reliable", desc: "Standard prices with no hidden fees" },
 { icon: Heart, title: "Fair & Respectful", desc: "Open to feedback, always improving" },
 { icon: Lock, title: "Confidentiality", desc: "No information shared without consent" },
 { icon: Users, title: "Trusted Relationship", desc: "Delivering value to customers" }
 ].map((value, idx) => (
 <div key={idx} className="bg-[#F4F3EE] rounded-xl p-4 border border-[#E5E2DA] text-center">
 <value.icon className="w-8 h-8 text-[#C15F3C] mx-auto mb-2" />
 <h4 className="font-semibold text-[#2F2E2B] mb-1">{value.title}</h4>
 <p className="text-xs text-[#6F6B63]">{value.desc}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Customer First Philosophy */}
 <div className="bg-[#F4F3EE] rounded-2xl p-8 border border-[#E5E2DA] mb-16">
 <div className="text-center mb-6">
 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-2">Customer First Philosophy</h2>
 <p className="text-[#6F6B63]">
 We are committed to building a fair, transparent, sustainable company for the long-term
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-4">
 {[
 "Selling the right products",
 "Selling at the right price",
 "Delivering as promised",
 "Continuously improving",
 "Building customer trust",
 "Creating real value"
 ].map((item, idx) => (
 <div key={idx} className="flex items-center gap-2">
 <CheckCircle className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#2F2E2B]">{item}</span>
 </div>
 ))}
 </div>
 </div>

 {/* CTA Section */}
 <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-2xl p-8 text-center">
 <h3 className="text-2xl font-bold text-white mb-3">
 Ready to Join Our Team?
 </h3>
 <p className="text-white/90 mb-6 max-w-2xl mx-auto">
 Visit our office for a walk-in interview or apply online today!
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <button className="bg-[#F4F3EE] text-[#C15F3C] hover:bg-[#F4F3EE] px-8 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 group">
 Apply Now
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
 </button>
 <button className="border-2 border-white text-white hover:bg-[#F4F3EE] hover:text-[#C15F3C] px-8 py-3 rounded-lg font-medium transition">
 Chat with HR
 </button>
 </div>
 <div className="mt-6 flex items-center justify-center gap-4 text-white/90">
 <div className="flex items-center gap-2">
 <Phone className="w-4 h-4" />
 <span className="text-sm">+91 89398 50314</span>
 </div>
 <div className="w-px h-4 bg-[#F4F3EE]/30" />
 <div className="flex items-center gap-2">
 <Mail className="w-4 h-4" />
 <span className="text-sm">careers@dostartup.com</span>
 </div>
 </div>
 </div>

 {/* Trust Badges */}
 <div className="mt-12 pb-0">
 <div className="flex items-center justify-center gap-6 flex-wrap">
 <div className="flex items-center gap-2">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={16} className="fill-[#C15F3C] text-[#C15F3C]" />
 ))}
 <span className="text-sm text-[#6F6B63]">Great Place to Work</span>
 </div>
 <div className="w-px h-6 bg-[#E5E2DA]" />
 <div className="flex items-center gap-2">
 <Users className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#6F6B63]">600+ Happy Employees</span>
 </div>
 <div className="w-px h-6 bg-[#E5E2DA]" />
 <div className="flex items-center gap-2">
 <Award className="w-4 h-4 text-[#C15F3C]" />
 <span className="text-sm text-[#6F6B63]">Top Startup Employer</span>
 </div>
 </div>
 </div>
 </div>
 </section>

 <Footer />
 </>
 );
}

// Lock icon component
const Lock = ({ className }: { className?: string }) => (
 <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6-4h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4V8a4 4 0 00-8 0v3h8z" />
 </svg>
);
