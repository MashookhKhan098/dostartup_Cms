"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


import { useState } from "react";
import {
    FiBriefcase,
    FiUsers,
    FiCalendar,
    FiMail,
    FiMapPin,
    FiPhone,
    FiUser,
    FiAward,
    FiTrendingUp,
    FiShield,
    FiHeart,
    FiCheckCircle,
    FiClock,
    FiFileText,
    FiBookOpen,
    FiGlobe
} from "react-icons/fi";

export default function HiringPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        experience: "",
        salary: "",
        about: "",
        location: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Application submitted successfully! Our HR team will reach out to you shortly.");
    };

    const openPositions = [
        { title: "Sales Executives", icon: FiTrendingUp, count: 15 },
        { title: "Service Associates", icon: FiUsers, count: 20 },
        { title: "Accountants", icon: FiBookOpen, count: 10 },
        { title: "Developers", icon: FiGlobe, count: 8 }
    ];

    const investors = [
        "ICICI Bank", "BeeNext", "Udtara", "Times of India", "CreedCap"
    ];

    const media = [
        "BBC", "Times of India", "Economic Times", "The Hindu",
        "Deccan Chronicle", "Business Standard", "New Indian Express",
        "Your Story", "Financial Express", "News7"
    ];

    const values = [
        { icon: FiTrendingUp, title: "Premium Quality", desc: "We continuously invest resources to deliver simple, fast, and error-free services." },
        { icon: FiAward, title: "Affordable Prices", desc: "We believe in building services that are affordable and delivering true value." },
        { icon: FiCheckCircle, title: "Simple & Reliable", desc: "We offer standard, easily understandable prices with no hidden fees." },
        { icon: FiHeart, title: "Fair & Respectful", desc: "We are open to feedback and always work to improve our services." },
        { icon: FiShield, title: "Confidentiality", desc: "No information about our customers is shared with any third parties without consent." },
        { icon: FiUsers, title: "Trusted Relationship", desc: "We continuously look for ways to deliver value to our customers." }
    ];

    return (
        <div className="bg-[#F4F3EE] min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F3EE] to-[#E5E2DA] border-b border-[#E5E2DA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-2 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C15F3C] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C15F3C]"></span>
                            </span>
                            <span className="text-xs font-medium text-[#C15F3C]">We're Hiring!</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#2F2E2B] mb-6">
                            Join the doStartup Team
                        </h1>
                        <p className="text-lg text-[#6F6B63] mb-8">
                            Start your career with doStartup! Walk-in to any of our offices Monday–Saturday, 9AM–7PM to explore opportunities and meet our Recruiters.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-[#E5E2DA]">
                                <FiUsers className="w-4 h-4 text-[#C15F3C]" />
                                <span className="text-sm text-[#2F2E2B]">600+ team members</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-[#E5E2DA]">
                                <FiCalendar className="w-4 h-4 text-[#C15F3C]" />
                                <span className="text-sm text-[#2F2E2B]">Daily walk-in interviews</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-[#E5E2DA]">
                                <FiBriefcase className="w-4 h-4 text-[#C15F3C]" />
                                <span className="text-sm text-[#2F2E2B]">Same-day offer letters</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Two Column Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl border border-[#E5E2DA] overflow-hidden shadow-sm">
                            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
                                <h2 className="text-xl font-semibold text-white">AI Assisted Assessment</h2>
                                <p className="text-sm text-white/90 mt-1">Job Application</p>
                            </div>
                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Enter Your Address *</label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Role *</label>
                                        <select
                                            name="role"
                                            required
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                        >
                                            <option value="">Select a role</option>
                                            <option value="sales">Sales Executive</option>
                                            <option value="service">Service Associate</option>
                                            <option value="accountant">Accountant</option>
                                            <option value="developer">Developer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Experience (Years) *</label>
                                        <input
                                            type="number"
                                            name="experience"
                                            required
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                            placeholder="Years of experience"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Salary Expectation (₹) *</label>
                                        <input
                                            type="text"
                                            name="salary"
                                            required
                                            value={formData.salary}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                            placeholder="Expected CTC"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Office Location *</label>
                                        <select
                                            name="location"
                                            required
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                                        >
                                            <option value="">Select location</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="chennai-chetpet">Chennai - Chetpet</option>
                                            <option value="chennai-guindy">Chennai - Guindy</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Tell us about yourself *</label>
                                    <textarea
                                        name="about"
                                        required
                                        rows={4}
                                        value={formData.about}
                                        onChange={handleChange}
                                        className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all resize-none"
                                        placeholder="Share your skills, experience, and why you want to join doStartup..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg hover:bg-[#A94E30] transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>

                        {/* Open Positions */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-[#2F2E2B] mb-6">Open Positions</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {openPositions.map((position, idx) => {
                                    const Icon = position.icon;
                                    return (
                                        <div key={idx} className="bg-white rounded-2xl border border-[#E5E2DA] p-6 hover:shadow-md transition-all duration-200">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 bg-[#F4F3EE] rounded-xl flex items-center justify-center border border-[#E5E2DA]">
                                                    <Icon className="w-6 h-6 text-[#C15F3C]" />
                                                </div>
                                                <span className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1">
                                                    <span className="w-2 h-2 bg-[#C15F3C] rounded-full"></span>
                                                    <span className="text-xs font-medium text-[#C15F3C]">{position.count} openings</span>
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-[#2F2E2B] mb-2">{position.title}</h3>
                                            <p className="text-sm text-[#6F6B63] mb-4">
                                                Join our {position.title.toLowerCase()} team and grow your career with doStartup.
                                            </p>
                                            <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                                                Learn more →
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:w-1/3 space-y-6">
                        {/* Chat with HR Card */}
                        <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6 text-center">
                            <div className="w-16 h-16 bg-[#F4F3EE] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E2DA]">
                                <FiMail className="w-8 h-8 text-[#C15F3C]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#2F2E2B] mb-2">Chat with HR</h3>
                            <p className="text-sm text-[#6F6B63] mb-4">Have questions? Our HR team is here to help!</p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2 text-sm text-[#6F6B63]">
                                    <FiPhone className="w-4 h-4 text-[#C15F3C]" />
                                    <span>+91 9999644807</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-sm text-[#6F6B63]">
                                    <FiMail className="w-4 h-4 text-[#C15F3C]" />
                                    <span>office.dostartup@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Interview Process */}
                        <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6">
                            <h3 className="text-lg font-semibold text-[#2F2E2B] mb-4">Interview Process</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-[#C15F3C] text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-medium text-[#2F2E2B] mb-1">AI Assessment</h4>
                                        <p className="text-xs text-[#6F6B63]">Complete your assessment online using LEDGERS AI platform. Once complete, a Recruiter will reach out.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-[#C15F3C] text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-medium text-[#2F2E2B] mb-1">Attend Interview</h4>
                                        <p className="text-xs text-[#6F6B63]">Complete the job application and attend 2 interviews on the same day with our Leaders. If selected, a job offer is extended the same day.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-[#C15F3C] text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-medium text-[#2F2E2B] mb-1">Build your Career!</h4>
                                        <p className="text-xs text-[#6F6B63]">On joining, bring the documents requested by your HR partner. You will receive 10-day training and be inducted into the team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6">
                            <h3 className="text-lg font-semibold text-[#2F2E2B] mb-4">Mandatory Requirements</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiCheckCircle className="w-4 h-4 text-[#C15F3C] flex-shrink-0" />
                                    <span>90% or above in 10th or 12th Standard, OR Cleared CA Inter / CS Inter</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiCheckCircle className="w-4 h-4 text-[#C15F3C] flex-shrink-0" />
                                    <span>Bachelor's Degree (any discipline)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiCheckCircle className="w-4 h-4 text-[#C15F3C] flex-shrink-0" />
                                    <span>Working knowledge of Income Tax & GST</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiCheckCircle className="w-4 h-4 text-[#C15F3C] flex-shrink-0" />
                                    <span>Professional & Ethical Conduct</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiCheckCircle className="w-4 h-4 text-[#C15F3C] flex-shrink-0" />
                                    <span>Background Verification is Mandatory</span>
                                </div>
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6">
                            <h3 className="text-lg font-semibold text-[#2F2E2B] mb-4">Interview Preparation</h3>
                            <p className="text-xs text-[#6F6B63] mb-3">Walk-in prepared with the following documents. Expect to spend 2–4 hours at our office for the interview process.</p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiFileText className="w-4 h-4 text-[#C15F3C]" />
                                    <span>PAN & Aadhaar Card</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiFileText className="w-4 h-4 text-[#C15F3C]" />
                                    <span>Experience Letter (if previously employed)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiFileText className="w-4 h-4 text-[#C15F3C]" />
                                    <span>Resume – Mandatory</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#6F6B63]">
                                    <FiFileText className="w-4 h-4 text-[#C15F3C]" />
                                    <span>Marksheets Original/Copy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Locations */}
            <section className="bg-white border-t border-[#E5E2DA] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold text-[#2F2E2B] mb-2">Daily Walk-In Interview</h2>
                        <p className="text-sm text-[#6F6B63]">Mon–Sat 9AM to 7PM</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#F4F3EE] rounded-2xl border border-[#E5E2DA] p-6 hover:shadow-md transition-all">
                            <FiMapPin className="w-8 h-8 text-[#C15F3C] mb-3" />
                            <h3 className="font-semibold text-[#2F2E2B] mb-2">Mumbai Office</h3>
                            <p className="text-sm text-[#6F6B63]">Aurum PropTech Ltd (Majesco Ltd)<br />6th Floor, MBP, Mahape<br />Navi Mumbai, Maharashtra – 400710</p>
                        </div>
                        <div className="bg-[#F4F3EE] rounded-2xl border border-[#E5E2DA] p-6 hover:shadow-md transition-all">
                            <FiMapPin className="w-8 h-8 text-[#C15F3C] mb-3" />
                            <h3 className="font-semibold text-[#2F2E2B] mb-2">Chennai – Chetpet</h3>
                            <p className="text-sm text-[#6F6B63]">KRM Center – 6th Floor<br />Shoppers Stop Building<br />Harrington Road, Chetpet<br />Chennai – 600031</p>
                        </div>
                        <div className="bg-[#F4F3EE] rounded-2xl border border-[#E5E2DA] p-6 hover:shadow-md transition-all">
                            <FiMapPin className="w-8 h-8 text-[#C15F3C] mb-3" />
                            <h3 className="font-semibold text-[#2F2E2B] mb-2">Chennai – Guindy</h3>
                            <p className="text-sm text-[#6F6B63]">RR Tower IV<br />Thiru Vi Ka Industrial Estate<br />SIDCO Industrial Estate, Guindy<br />Chennai, Tamil Nadu – 600032</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Values Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold text-[#2F2E2B] mb-2">Working at doStartup</h2>
                        <p className="text-sm text-[#6F6B63] max-w-2xl mx-auto">
                            At doStartup we are passionate about building technology that solves large problems. We cater to the growth of our employees and provide encouragement to expand their knowledge.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div key={idx} className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-xl p-5 hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] mb-4">
                                        <Icon className="w-6 h-6 text-[#C15F3C]" />
                                    </div>
                                    <h3 className="font-semibold text-[#2F2E2B] mb-2">{value.title}</h3>
                                    <p className="text-sm text-[#6F6B63]">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Media Section */}


            {/* Trust Badges */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-2 pb-0">
                <div className="flex flex-wrap items-center justify-center gap-6 py-6 text-xs text-[#B1ADA1]">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>Trusted by 50,000+ startups</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>100% Secure & Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                        </svg>
                        <span>Customer First Philosophy</span>
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    );
}