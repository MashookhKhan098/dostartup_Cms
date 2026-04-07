"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock, User } from "lucide-react";
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

interface BlogSidebarProps {
  category?: string | undefined;
  isMainFeed?: boolean;
  maxItems?: number;
  columns?: number;
}

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";
const CMS_URL = "https://cms.dostartup.in";
const API = `${CMS_URL}/api/content/items/blogs?token=${TOKEN}`;

export default function BlogSidebar({ category, isMainFeed = false, maxItems, columns = 2 }: BlogSidebarProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const getImageUrl = (image: any) => {
    if (!image) return null;
    let path = "";
    if (typeof image === "string") {
      path = image;
    } else if (image && typeof image === "object" && image.path) {
      path = image.path;
    } else {
      return null;
    }
    if (!path) return null;
    if (path.startsWith("http")) return path;
    const base = CMS_URL.endsWith("/") ? CMS_URL.slice(0, -1) : CMS_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}/storage/uploads${cleanPath}`;
  };

  const getContentPreview = (content: any) => {
    if (!content) return "";
    let text = "";
    if (Array.isArray(content)) {
      text = typeof content[0] === "string" ? content[0] : JSON.stringify(content[0]);
    } else if (typeof content === "string") {
      text = content;
    } else {
      text = String(content);
    }
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
    const length = columns === 3 ? 80 : 120;
    return cleanText.length > length ? cleanText.substring(0, length) + "..." : cleanText;
  };

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(API);
        const data = await res.json();
        if (Array.isArray(data)) {
          const filtered = category
            ? data.filter(
                (b: Blog) =>
                  b.category?.toLowerCase() === category?.toLowerCase()
              )
            : data;
          setBlogs(filtered);
        }
      } catch (error) {
        console.error("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [category]);

  const displayedBlogs = maxItems ? blogs.slice(0, maxItems) : blogs;

  if (loading) {
    const loadingCols = columns === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
    return (
      <div className={isMainFeed ? `grid ${loadingCols} gap-6 animate-pulse` : "space-y-4 animate-pulse"}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={isMainFeed ? "h-64 bg-white rounded-2xl border border-[#E5E2DA]" : "h-32 bg-white rounded-xl border border-[#E5E2DA]"} />
        ))}
      </div>
    );
  }

  if (displayedBlogs.length === 0) {
    const displayCategory = category?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "General";
    return (
      <div className="bg-white rounded-[32px] border border-[#E5E2DA] p-16 text-center w-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-3xl bg-[#F4F3EE] flex items-center justify-center mb-6 text-[#C15F3C]">
           <Clock size={32} />
        </div>
        <h4 className="text-[#201F1D] text-lg font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>No Articles Available</h4>
        <p className="text-[#6F6B63] text-[13px] max-w-[200px] leading-relaxed">
          Our editorial team is drafting business insights for <strong>{displayCategory}</strong>.
        </p>
      </div>
    );
  }

  const gridClass = isMainFeed 
    ? columns === 5 
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      : columns === 3 
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
        : "grid-cols-1 md:grid-cols-2"
    : "flex flex-col gap-5";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className={`${columns === 3 ? 'text-lg md:text-xl' : 'text-2xl'} font-bold text-[#201F1D]`} style={{ fontFamily: "'Sora', sans-serif" }}>
          {isMainFeed ? "Business Updates" : "Related Updates"}
        </h3>
        <span className="text-[9px] uppercase tracking-widest font-bold text-[#C15F3C] px-2 py-0.5 bg-[#C15F3C]/5 rounded-full border border-[#C15F3C]/10">
          {category || "All"}
        </span>
      </div>

      <div className={isMainFeed ? `grid ${gridClass} gap-6` : gridClass}>
        {displayedBlogs.map((blog) => {
          const mainImageUrl = getImageUrl(blog.image_url);
          const authorImageUrl = getImageUrl(blog.author_image);
          const previewText = getContentPreview(blog.content);

          if (isMainFeed) {
            return (
              <Link
                key={blog._id}
                href={`/blog/${blog._id}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5E2DA] overflow-hidden hover:shadow-xl hover:shadow-[#C15F3C]/5 transition-all duration-500 no-underline h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  {mainImageUrl ? (
                    <img src={mainImageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-[#F4F3EE] flex items-center justify-center text-[#C15F3C]"><Clock size={24} /></div>
                  )}
                </div>

                <div className={`${columns === 3 ? 'p-4' : 'p-6'} flex flex-col flex-1`}>
                  <h4 className={`${columns === 3 ? 'text-sm' : 'text-base font-bold'} text-[#201F1D] leading-tight group-hover:text-[#C15F3C] transition-colors mb-2 line-clamp-2`} style={{ fontFamily: "'Sora', sans-serif" }}>
                    {blog.title}
                  </h4>
                  <p className={`${columns === 3 ? 'text-[11px]' : 'text-sm'} text-[#6F6B63] line-clamp-2 leading-relaxed mb-4`}>
                    {previewText}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#F4F3EE] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 min-w-0">
                       <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-[#E5E2DA]">
                        {authorImageUrl ? (
                          <img src={authorImageUrl} alt={blog.writer_name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100"><User size={10} className="text-[#B1ADA1]" /></div>
                        )}
                      </div>
                      <span className="text-[9px] font-bold text-[#201F1D] truncate">
                        {blog.writer_name || blog.author_name || "Team"}
                      </span>
                    </div>
                    <ArrowRight size={12} className="text-[#C15F3C] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={blog._id}
              href={`/blog/${blog._id}`}
              className="group block bg-white rounded-xl border border-[#E5E2DA] overflow-hidden hover:shadow-md transition-all duration-300 no-underline"
            >
              <div className="flex gap-3 p-3">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  {mainImageUrl ? (
                    <img src={mainImageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-[#F4F3EE] flex items-center justify-center text-[#C15F3C]"><Clock size={14} /></div>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h4 className="text-[11px] font-bold text-[#2F2E2B] line-clamp-2 leading-tight group-hover:text-[#C15F3C] transition-colors mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {blog.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-[#6F6B63]">{blog.upload_date}</span>
                    <ArrowRight size={10} className="text-[#C15F3C]" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {!isMainFeed && (
        <div className="bg-[#1a1714] rounded-2xl p-4 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="font-bold text-sm mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Expert Guidance</h4>
            <p className="text-white/60 text-[10px] mb-3">Insights for {category || "business"}.</p>
            <button className="w-full bg-[#C15F3C] text-white font-bold py-2 rounded-lg text-[10px] hover:bg-[#A94E30] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
