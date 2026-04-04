"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
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
    const path = typeof image === "string" ? image : image.path;
    if (!path) return null;
    return path.startsWith("http") ? path : `${CMS_URL}/storage/uploads${path.startsWith("/") ? path : `/${path}`}`;
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
        <div className="w-12 h-12 border-4 border-[#C15F3C]/20 border-t-[#C15F3C] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#2F2E2B]">Article Not Found</h2>
        <Link href="/" className="mt-4 text-[#C15F3C] hover:underline underline-offset-4">Return to Home</Link>
      </div>
    );
  }

  const mainImageUrl = getImageUrl(blog.image_url);
  const authorImageUrl = getImageUrl(blog.author_image);

  return (
    <>
      <Navbar />
      
      <main className="bg-white min-h-screen">
        {/* Banner Section */}
        <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] bg-[#1a1714] overflow-hidden">
          {mainImageUrl ? (
            <img 
              src={mainImageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="w-full h-full bg-[#1a1714]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-6 pb-8 md:pb-12 w-full">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C15F3C] mb-6 hover:translate-x-[-4px] transition-transform">
                <ArrowLeft size={16} />
                Back to Resources
              </Link>
              <span className="inline-block px-3 py-1 bg-[#F4F3EE] text-[#C15F3C] text-xs font-bold rounded-full border border-[#E5E2DA] uppercase tracking-widest mb-4">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#2F2E2B] leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Sidebar Content (Author) */}
            <div className="md:w-1/4">
              <div className="sticky top-24 p-6 bg-[#F4F3EE] rounded-3xl border border-[#E5E2DA]">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                    {authorImageUrl ? (
                      <img src={authorImageUrl} alt={blog.writer_name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-white flex items-center justify-center"><User size={32} className="text-[#B1ADA1]" /></div>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-[2px] mb-1">Author</p>
                  <h3 className="font-bold text-[#2F2E2B] text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {blog.writer_name || blog.author_name || "Startup Desk"}
                  </h3>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-[#E5E2DA]">
                  <div className="flex items-center gap-3 text-[#6F6B63]">
                    <Calendar size={14} />
                    <span className="text-[11px] font-medium">{blog.upload_date || "Date Unspecified"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#6F6B63]">
                    <Clock size={14} />
                    <span className="text-[11px] font-medium">5 Min Read</span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-[11px] text-[#6F6B63] italic leading-relaxed text-center">
                    Providing expert guidance for startups and established businesses across India.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Article */}
            <div className="md:w-3/4">
              <article className="prose prose-lg max-w-none text-[#2F2E2B] leading-relaxed">
                {typeof blog.content === "string" ? (
                  <div 
                    dangerouslySetInnerHTML={{ __html: blog.content }} 
                    className="blog-content-area"
                  />
                ) : (
                  <div className="space-y-6">
                    {Array.isArray(blog.content) ? (
                      blog.content.map((block: any, idx: number) => (
                        <div key={idx}>{typeof block === "string" ? block : JSON.stringify(block)}</div>
                      ))
                    ) : (
                      <p>Article content format is currently unsupported.</p>
                    )}
                  </div>
                )}
              </article>

              <div className="mt-16 pt-8 border-t border-[#E5E2DA]">
                <div className="bg-[#1a1714] rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-all">
                    <Clock size={120} />
                  </div>
                  <div className="relative z-10 max-w-md">
                    <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Need more clarity?</h2>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                      Our legal and compliance experts are ready to help you navigate through complex business requirements.
                    </p>
                    <button className="px-6 py-3 bg-[#C15F3C] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#A94E30] transition-all shadow-lg shadow-[#C15F3C]/20">
                      Speak to Consultant
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');
        
        .blog-content-area h2 {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #2F2E2B;
        }
        .blog-content-area p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #6F6B63;
        }
        .blog-content-area ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: #6F6B63;
        }
        .blog-content-area li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
}
