interface DynamicTabContentProps {
 category: string;
}

async function getTabData(category: string) {
 const res = await fetch(
 "https://cms.dostartup.in/api/content/items/testing",
 { cache: "no-store" }
 );

 const json = await res.json();

 if (!Array.isArray(json) || json.length === 0) {
 return null;
 }

 const item = json.find(
 (entry: any) =>
 entry.category?.toLowerCase() === category?.toLowerCase()
 );

 return item?.description || null;
}

export default async function DynamicTabContent({
 category,
}: DynamicTabContentProps) {
 const data = await getTabData(category);

 if (!data) {
 return (
 <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-2xl p-8 text-center">
 <p className="text-[#C15F3C] font-medium">
 No data found for "{category}". Please check the category.
 </p>
 </div>
 );
 }

 return (
 <div className="bg-[#F4F3EE] py-5 sm:py-6">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">

 {/* Modern Hero with Split Layout */}
 <div className="relative mb-16">
 <div className="grid lg:grid-cols-2 gap-12 items-center">

 {/* Left Side - Content */}
 <div className="space-y-6">
 <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E5E2DA] rounded-full px-4 py-1.5 shadow-sm">
 <div className="relative">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-ping absolute"></div>
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full"></div>
 </div>
 <span className="text-xs font-medium text-[#C15F3C] uppercase ">
 Expert Guide
 </span>
 <div className="w-px h-3 bg-[#E5E2DA]"></div>
 <span className="text-xs text-[#6F6B63]">Updated Weekly</span>
 </div>

 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
 <span className="text-[#2F2E2B]">{data.title?.split(' ').slice(0, -1).join(' ')}</span>
 <br />
 <span className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] bg-clip-text text-transparent">
 {data.title?.split(' ').slice(-1)}
 </span>
 </h1>

 <p className="text-[#6F6B63] text-lg leading-relaxed max-w-lg">
 {data.description}
 </p>

 <div className="flex items-center gap-4 pt-4">
 <div className="flex -space-x-2">
 {[1, 2, 3, 4].map((i) => (
 <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] border-2 border-white shadow-sm"></div>
 ))}
 </div>
 <div className="text-sm text-[#6F6B63]">
 <span className="font-semibold text-[#2F2E2B]">2.5k+</span> readers this week
 </div>
 </div>
 </div>

 {/* Right Side - Visual */}
 <div className="relative">
 <div className="absolute inset-0 bg-gradient-to-r from-[#C15F3C]/20 to-transparent rounded-full blur-3xl"></div>
 <div className="relative bg-white rounded-2xl shadow-xl border border-[#E5E2DA] p-6 backdrop-blur-sm">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C15F3C] to-[#A94E30] flex items-center justify-center">
 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
 </svg>
 </div>
 <div>
 <h3 className="font-semibold text-[#2F2E2B]">Quick Summary</h3>
 <p className="text-xs text-[#6F6B63]">5 min read</p>
 </div>
 </div>
 <ul className="space-y-2">
 {[
 "Complete step-by-step guide",
 "Expert tips & best practices",
 "Latest compliance updates"
 ].map((item, i) => (
 <li key={i} className="flex items-center gap-2 text-sm text-[#6F6B63]">
 <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
 </svg>
 {item}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>

 {/* Main Content Grid */}
 <div className="grid lg:grid-cols-12 gap-8">

 {/* Sidebar - Left (New Position) */}
 <div className="lg:col-span-3 order-2 lg:order-1">
 <div className="space-y-6 sticky top-6">

 {/* Author Profile Card */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] overflow-hidden shadow-sm">
 <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-5 py-4">
 <h3 className="text-white font-semibold text-sm">About the Author</h3>
 </div>
 <div className="p-5 text-center">
 <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3">
 {(data.author?.name || "NA")
 .split(" ")
 .map((n: string) => n[0])
 .join("")}
 </div>
 <h4 className="font-semibold text-[#2F2E2B]">{data.author?.name || "Expert Author"}</h4>
 <p className="text-sm text-[#C15F3C] font-medium mt-1">{data.author?.role || "Industry Expert"}</p>
 <div className="flex items-center justify-center gap-1 mt-2">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-3 h-3 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 </div>
 </div>

 {/* Progress Card */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-5">
 <div className="flex items-center gap-2 mb-3">
 <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
 </svg>
 <h4 className="font-semibold text-[#2F2E2B] text-sm">Reading Progress</h4>
 </div>
 <div className="h-2 bg-[#F4F3EE] rounded-full overflow-hidden mb-2">
 <div className="h-full w-0 bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-full" style={{ width: '65%' }}></div>
 </div>
 <p className="text-xs text-[#B1ADA1]">65% completed • 3 min left</p>
 </div>

 {/* Quick Actions */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-5">
 <h4 className="font-semibold text-[#2F2E2B] text-sm mb-3">Quick Actions</h4>
 <div className="space-y-2">
 <button className="w-full flex items-center justify-between px-3 py-2 bg-[#F4F3EE] hover:bg-[#C15F3C]/10 rounded-lg transition-all group">
 <span className="text-sm text-[#6F6B63] group-hover:text-[#C15F3C]">Save for later</span>
 <svg className="w-4 h-4 text-[#B1ADA1] group-hover:text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
 </svg>
 </button>
 <button className="w-full flex items-center justify-between px-3 py-2 bg-[#F4F3EE] hover:bg-[#C15F3C]/10 rounded-lg transition-all group">
 <span className="text-sm text-[#6F6B63] group-hover:text-[#C15F3C]">Download PDF</span>
 <svg className="w-4 h-4 text-[#B1ADA1] group-hover:text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
 </svg>
 </button>
 </div>
 </div>

 </div>
 </div>

 {/* Main Content - Center */}
 <div className="lg:col-span-6 order-1 lg:order-2">
 <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

 {/* Content */}
 <div className="px-6 md:px-8 py-3 md:py-4">

 {/* Introduction */}
 <div className="mb-10">
 <div className="prose prose-lg max-w-none">
 <p className="text-[#6F6B63] leading-relaxed text-base first-letter:text-4xl first-letter:font-bold first-letter:text-[#C15F3C] first-letter:mr-2 first-letter:float-left">
 {data.introduction}
 </p>
 </div>
 </div>

 {/* Sections with Timeline Style */}
 {(data.sections || []).map((section: any, index: number) => (
 <div key={index} className="relative mb-12 last:mb-0 pl-8 border-l-2 border-[#E5E2DA] group">
 <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-[#C15F3C] flex items-center justify-center group-hover:scale-110 transition-transform">
 <div className="w-2 h-2 rounded-full bg-[#C15F3C]"></div>
 </div>

 <h2 className="text-2xl font-bold text-[#2F2E2B] mb-4 group-hover:text-[#C15F3C] transition-colors">
 {section.heading}
 </h2>

 <p className="text-[#6F6B63] leading-relaxed mb-5">
 {section.content}
 </p>

 {/* Points with Chip Design */}
 {(section.points || []).length > 0 && (
 <div className="flex flex-wrap gap-2 mt-4">
 {(section.points || []).map((point: string, i: number) => {
 const [title, ...desc] = point.split(":");
 return (
 <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F3EE] rounded-full text-xs text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white transition-all cursor-pointer group/item">
 <svg className="w-3 h-3 group-hover/item:text-white" fill="currentColor" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
 </svg>
 <span>{title}</span>
 </span>
 );
 })}
 </div>
 )}
 </div>
 ))}
 </div>

 {/* Engagement Footer */}
 <div className="px-6 md:px-8 py-5 bg-[#F4F3EE] border-t border-[#E5E2DA]">
 <div className="flex flex-wrap items-center justify-between gap-3">
 <div className="flex items-center gap-3">
 <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm text-[#6F6B63] hover:text-[#C15F3C] hover:shadow-sm transition-all">
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
 </svg>
 <span>Helpful (245)</span>
 </button>
 <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm text-[#6F6B63] hover:text-[#C15F3C] transition-all">
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
 </svg>
 <span>Share</span>
 </button>
 </div>
 <div className="text-xs text-[#B1ADA1]">
 Last updated: {data.author?.updatedDate || "March 2024"}
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Sidebar - Right */}
 <div className="lg:col-span-3 order-3">
 <div className="space-y-6 sticky top-6">

 {/* Support Card */}
 <div className="bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl p-5 text-white text-center">
 <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-4">
 💬
 </div>
 <h3 className="font-bold text-lg mb-2">Need Help?</h3>
 <p className="text-white/90 text-sm mb-4">Chat with our experts for personalized guidance</p>
 <button className="w-full bg-white text-[#C15F3C] font-semibold py-2.5 rounded-xl hover:shadow-lg transition-all">
 Start Conversation →
 </button>
 </div>

 {/* Popular Tags */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-5">
 <h4 className="font-semibold text-[#2F2E2B] text-sm mb-3">Popular Topics</h4>
 <div className="flex flex-wrap gap-2">
 {["Compliance", "Registration", "Taxation", "Legal", "Startup", "Funding", "IPR", "GST"].map((tag, i) => (
 <span key={i} className="px-3 py-1.5 bg-[#F4F3EE] text-[#C15F3C] text-xs rounded-full hover:bg-[#C15F3C] hover:text-white transition-all cursor-pointer">
 #{tag}
 </span>
 ))}
 </div>
 </div>

 {/* Newsletter */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-5">
 <div className="flex items-center gap-2 mb-3">
 <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 <h4 className="font-semibold text-[#2F2E2B] text-sm">Weekly Newsletter</h4>
 </div>
 <p className="text-xs text-[#6F6B63] mb-3">Get expert insights delivered to your inbox</p>
 <div className="flex flex-col sm:flex-row gap-2">
 <input type="email" placeholder="Your email" className="flex-1 w-full px-3 py-2 border border-[#E5E2DA] rounded-lg text-sm bg-[#F4F3EE] focus:ring-1 focus:ring-[#C15F3C] outline-none" />
 <button className="w-full sm:w-auto px-4 py-2 bg-[#C15F3C] text-white rounded-lg text-sm hover:bg-[#A94E30] transition-all">
 Subscribe
 </button>
 </div>
 </div>

 </div>
 </div>

 </div>
 </div>
 </div>
 );
}
