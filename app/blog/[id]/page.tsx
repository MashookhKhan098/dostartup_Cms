"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { User, Clock, Mail } from "lucide-react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string | string[] | any;
  image_url: any;
  author_name: string;
  author_image: any;
  upload_date: string;
  writer_name: string;
}

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";
const CMS_URL = "https://cms.dostartup.in";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  const getImageUrl = (image: any) => {
    if (!image) return null;
    
    let path = "";
    
    if (typeof image === "string") {
      path = image;
    } else if (image && typeof image === "object") {
      path = image.path || image.url || "";
    }
    
    if (!path) return null;
    if (path.startsWith("http")) return path;

    const base = CMS_URL.endsWith("/") ? CMS_URL.slice(0, -1) : CMS_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    
    // Check if it's already a full storage path
    if (cleanPath.includes("/storage/uploads")) {
      return `${base}${cleanPath}`;
    }
    return `${base}/storage/uploads${cleanPath}`;
  };

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`${CMS_URL}/api/content/items/blogs?token=${TOKEN}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          const found = data.find((b: any) => b._id === id);
          setBlog(found || null);
        }
      } catch (error) {
        console.error("Single blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#C15F3C]/20 border-t-[#C15F3C] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-[#201F1D]" style={{ fontFamily: "'Sora', sans-serif" }}>Article Not Found</h2>
        <p className="text-[#6F6B63] mt-2 mb-8">The requested insights could not be retrieved.</p>
        <Link href="/" className="px-8 py-3 bg-[#C15F3C] text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-[#C15F3C]/20">Return Home</Link>
      </div>
    );
  }

  const mainImageUrl = getImageUrl(blog.image_url);
  const authorImageUrl = getImageUrl(blog.author_image);

  return (
    <>
      <Navbar />
      
      <main className="bg-[#F4F3EE] min-h-screen pb-24">
        <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20">
          
          {/* Header Segment */}
          <div className="mb-10 text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-[#C15F3C] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>
              {blog.title}
            </h1>

            {/* Meta Segment: Author Image & Date */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm flex-shrink-0">
                {authorImageUrl ? (
                  <img src={authorImageUrl} alt={blog.writer_name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200"><User size={24} className="text-[#B1ADA1]" /></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#201F1D]">
                  {blog.writer_name || blog.author_name || "Startup Team"}
                </span>
                <span className="text-xs text-[#6F6B63] font-medium tracking-wide">
                  {blog.upload_date}
                </span>
              </div>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 mb-16 bg-white border border-[#E5E2DA]">
            {mainImageUrl ? (
              <img 
                src={mainImageUrl} 
                alt={blog.title} 
                className="w-full h-auto object-cover max-h-[700px]"
              />
            ) : (
              <div className="w-full h-96 flex items-center justify-center text-[#B1ADA1] font-bold uppercase tracking-widest bg-white">Visual Information Pending</div>
            )}
          </div>

          {/* Detailed Article Content */}
          <div className="max-w-2xl mx-auto">
            <article className="prose prose-stone prose-lg max-w-none text-[#2F2E2B] leading-[1.85]">
              {typeof blog.content === "string" ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: blog.content }} 
                  className="blog-inner-html-render"
                />
              ) : Array.isArray(blog.content) ? (
                <div className="space-y-6">
                  {blog.content.map((block: any, idx: number) => {
                    const contentValue = typeof block === 'string' ? block : (block.value || block.settings?.text || block.content || "");
                    return contentValue ? (
                      <div 
                        key={idx} 
                        className="text-[#4A463F] text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: contentValue }}
                      />
                    ) : null;
                  })}
                </div>
              ) : (
                <div className="p-12 text-center rounded-3xl bg-white border border-[#E5E2DA]">
                   <p className="text-[#6F6B63] font-medium italic">Article body is being finalized.</p>
                </div>
              )}
            </article>

            {/* Newsletter Integration */}
            <div className="mt-24 p-12 bg-[#1a1714] rounded-[3rem] text-white relative overflow-hidden group shadow-2xl shadow-black/10">
               <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Dostartup Weekly Brief</h3>
                  <p className="text-white/60 text-base max-w-md mb-8">Join 15k+ business leaders getting expert legal insights to their inbox every Tuesday.</p>
                  <form className="flex flex-col sm:flex-row w-full gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                     <input 
                      type="email" 
                      placeholder="founder@company.com" 
                      className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#C15F3C] transition-all text-sm"
                     />
                     <button className="px-8 py-4 bg-[#C15F3C] text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-[#A94E30] transition-all shadow-xl shadow-[#C15F3C]/40">
                        Join Briefing
                     </button>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap');
        
        .blog-inner-html-render h2 {
          font-family: 'Sora', sans-serif;
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          color: #201F1D;
          letter-spacing: -1px;
          line-height: 1.2;
        }
        .blog-inner-html-render p {
          margin-bottom: 2rem;
          font-size: 1.15rem;
          color: #4A463F;
          line-height: 1.9;
        }
        .blog-inner-html-render blockquote {
          border-left: 4px solid #C15F3C;
          padding-left: 2rem;
          margin: 3rem 0;
          font-style: italic;
          font-size: 1.25rem;
          color: #201F1D;
        }
        .blog-inner-html-render ul {
          margin-bottom: 2.5rem;
          padding-left: 1.5rem;
          list-style-type: none;
        }
        .blog-inner-html-render li {
          margin-bottom: 1.2rem;
          color: #4A463F;
          font-size: 1.15rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .blog-inner-html-render li::before {
          content: "•";
          color: #C15F3C;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
      `}</style>
    </>
  );
}
