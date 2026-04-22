
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import DynamicTabContent from '../components/DynamicTabContent';
import { Rocket, Zap, Users, CheckCircle2, MapPin, FileText, Zap as ZapIcon } from 'lucide-react';

export default function Home() {

 const features = [
 {
 icon: <Rocket className="w-8 h-8 text-blue-600" />,
 title: "Scale Smarter, Grow Faster",
 description: "Designed specifically for CA, Tax Practitioners & Consultants professionals, LEDGERS Pro CRM streamlines client management and operations, empowering you to scale your business seamlessly."
 },
 {
 icon: <Zap className="w-8 h-8 text-blue-600" />,
 title: "Productivity, Powered by AI",
 description: "Stay ahead in a competitive market. Our AI tools equip your in-house team to manage client demands efficiently while maintaining quality and compliance."
 },
 {
 icon: <Users className="w-8 h-8 text-blue-600" />,
 title: "Dedicated Customer Experience",
 description: "Our team is committed to providing personalized support at every step-onboarding, troubleshooting, and optimizing your use of LEDGERS."
 }
 ];
 
 return (
 <>
 <Navbar />
 
 {/* Hero Section - Virtual Office + GSTIN */}
 <div className="bg-[#F4F3EE] py-6 px-4">
 <div className="max-w-7xl mx-auto">
 {/* Top Section */}
 <div className="text-center mb-12">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Set Up Your Virtual Office + GSTIN
 </h1>
 <p className="text-gray-600 text-lg max-w-3xl mx-auto">
 Establish your business presence anywhere in India with a Virtual Office address
 and hassle-free GST registration trusted by 1000s of
 startups, freelancers and SMEs.
 </p>
 </div>

 {/* Feature Pills */}
 <div className="flex flex-wrap justify-center gap-4 mb-16">
 <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
 <CheckCircle2 className="w-5 h-5 text-green-500" />
 <span className="text-gray-700 font-medium">Assured Virtual Office Setup</span>
 </div>
 <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
 <CheckCircle2 className="w-5 h-5 text-green-500" />
 <span className="text-gray-700 font-medium">11-Month Agreement with Stamp Paper</span>
 </div>
 <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
 <CheckCircle2 className="w-5 h-5 text-green-500" />
 <span className="text-gray-700 font-medium">100% Refund Guarantee</span>
 </div>
 </div>

 {/* Main Content Grid */}
 <div className="grid md:grid-cols-2 gap-8 items-start">
 {/* Left Side - Form */}
 <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
 <h2 className="text-2xl font-bold text-gray-900 mb-6">
 Start Your Virtual Office
 </h2>
 
 <div className="flex gap-3 mb-6">
 <div className="flex items-center gap-2 text-sm text-blue-600">
 <MapPin className="w-4 h-4" />
 <span>Virtual Address</span>
 </div>
 <div className="flex items-center gap-2 text-sm text-blue-600">
 <FileText className="w-4 h-4" />
 <span>Document Handling</span>
 </div>
 <div className="flex items-center gap-2 text-sm text-blue-600">
 <ZapIcon className="w-4 h-4" />
 <span>Fast Compliance</span>
 </div>
 </div>

 <form className="space-y-4">
 <input
 type="text"
 placeholder="PAN / GSTIN"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-[#F9F8F6]"
 />
 
 <div className="relative">
 <select
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-[#F9F8F6]"
 >
 <option>Virtual Office Location</option>
 <option>Delhi</option>
 <option>Mumbai</option>
 <option>Bangalore</option>
 <option>Hyderabad</option>
 <option>Chennai</option>
 <option>Kolkata</option>
 </select>
 </div>

 <button
 type="submit"
 className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
 >
 Buy Virtual Office + GSTIN
 <span className="bg-[#F4F3EE] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">→</span>
 </button>

 <p className="text-xs text-gray-500 text-center">
 By submitting this form, you agree to our{' '}
 <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
 {' '}and{' '}
 <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
 </p>
 </form>
 </div>

 {/* Right Side - Benefits */}
 <div className="bg-white rounded-2xl p-8 space-y-6 shadow-lg border border-gray-100">
 <div className="flex items-start gap-4 group">
 <div className="bg-[#FDF1EC] rounded-2xl p-3 mt-1 shadow-sm border border-[#C15F3C]/10 group-hover:bg-[#C15F3C]/10 transition-colors duration-300">
 <CheckCircle2 className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <div>
 <h3 className="font-bold text-[#201F1D] text-lg mb-2">
 Assured Service by Trusted Partner
 </h3>
 <p className="text-[#6F6B63] text-sm leading-relaxed">
 Your virtual office and GSTIN setup is handled by verified partners, ensuring a
 seamless and professional experience.
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4 group">
 <div className="bg-[#FDF1EC] rounded-2xl p-3 mt-1 shadow-sm border border-[#C15F3C]/10 group-hover:bg-[#C15F3C]/10 transition-colors duration-300">
 <CheckCircle2 className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <div>
 <h3 className="font-bold text-[#201F1D] text-lg mb-2">
 11-Month Agreement with Stamp Paper
 </h3>
 <p className="text-[#6F6B63] text-sm leading-relaxed">
 Receive a legally valid 11-month agreement, documented on stamp paper,
 providing full compliance and peace of mind.
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4 group">
 <div className="bg-[#FDF1EC] rounded-2xl p-3 mt-1 shadow-sm border border-[#C15F3C]/10 group-hover:bg-[#C15F3C]/10 transition-colors duration-300">
 <CheckCircle2 className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <div>
 <h3 className="font-bold text-[#201F1D] text-lg mb-2">
 100% Refund Guarantee
 </h3>
 <p className="text-[#6F6B63] text-sm leading-relaxed">
 If the service is not successfully completed, you are eligible for a full refund,
 making your investment risk-free.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 
 {/* Feature Cards Section */}
 <div className="py-12 px-4 bg-[#F4F3EE]">
 <div className="max-w-7xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {features.map((feature, index) => (
 <div 
 key={index}
 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E2DA]"
 >
 <div className="flex justify-center mb-6">
 <div className="p-4 bg-blue-50 rounded-2xl shadow-inner">
 {feature.icon}
 </div>
 </div>
 <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
 {feature.title}
 </h3>
 <p className="text-gray-600 text-center text-sm leading-relaxed">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>

 <DynamicTabContent category="virtual-office" />
 <DynamicPricingSection category="virtual-office" />
 <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
