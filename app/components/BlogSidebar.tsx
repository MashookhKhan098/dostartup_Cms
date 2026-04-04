"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
}

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";
const CMS_URL = "https://cms.dostartup.in";
const API = `${CMS_URL}/api/content/items/blogs?token=${TOKEN}`;

export default function BlogSidebar({ category }: BlogSidebarProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper to handle Cockpit image structure (string path or object)
  const getImageUrl = (image: any) => {
    if (!image) return null;
    
    // Sometimes it's { path: "..." }, sometimes it's just a string
    let path = "";
    if (typeof image === "string") {
      path = image;
    } else if (image && typeof image === "object" && image.path) {
      path = image.path;
    } else {
      return null;
    }

    if (!path) return null;

    // Handle relative vs absolute paths
    if (path.startsWith("http")) return path;
    
    // Ensure we don't double up slashes or miss them
    const base = CMS_URL.endsWith("/") ? CMS_URL.slice(0, -1) : CMS_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    
    // Pattern from Hero.tsx: ${STRAPI_URL}/storage/uploads${imageUrl}
    const finalUrl = `${base}/storage/uploads${cleanPath}`;
    console.log("Resolving Blog Image:", finalUrl);
    return finalUrl;
  };

  // Helper to safely extract and truncate text from content (stripping HTML)
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

    // Strip HTML tags for the preview
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanText.length > 80 ? cleanText.substring(0, 80) + "..." : cleanText;
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

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-white rounded-xl border border-[#E5E2DA]" />
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6 text-center">
        <p className="text-[#6F6B63] text-sm">No related articles found for this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-[#2F2E2B]" style={{ fontFamily: "'Sora', sans-serif" }}>
          Related Updates
        </h3>
        <span className="text-xs font-semibold text-[#C15F3C] px-2 py-1 bg-[#F4F3EE] rounded-full border border-[#E5E2DA]">
          {category || "All"}
        </span>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => {
          const mainImageUrl = getImageUrl(blog.image_url);
          const authorImageUrl = getImageUrl(blog.author_image);
          const previewText = getContentPreview(blog.content);

          return (
            <Link
              key={blog._id}
              href={`/blog/${blog._id}`}
              className="group block bg-white rounded-2xl border border-[#E5E2DA] overflow-hidden hover:shadow-md transition-all duration-300 no-underline"
            >
              <div className="flex gap-4 p-4">
                {/* Image Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  {mainImageUrl ? (
                    <img
                      src={mainImageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F4F3EE] flex items-center justify-center text-[#C15F3C]">
                      <Clock size={20} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between min-w-0 text-left">
                  <div>
                    <h4 className="text-sm font-bold text-[#2F2E2B] line-clamp-2 leading-tight group-hover:text-[#C15F3C] transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {blog.title}
                    </h4>
                    <p className="text-[11px] text-[#6F6B63] mt-1 line-clamp-2 italic leading-relaxed">
                      {previewText}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1.5">
                      {authorImageUrl ? (
                        <img
                          src={authorImageUrl}
                          alt={blog.writer_name || blog.author_name}
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      ) : (
                        <User size={10} className="text-[#B1ADA1]" />
                      )}
                      <span className="text-[10px] font-medium text-[#6F6B63]">
                        By {blog.writer_name || blog.author_name || "Admin"}
                      </span>
                    </div>
                    <div className="text-[#C15F3C] group/btn flex items-center gap-1 font-semibold text-[10px] uppercase tracking-wider">
                      Read
                      <Clock size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Promotional Card */}
      <div className="bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
          <Clock size={80} />
        </div>
        <h4 className="font-bold text-lg mb-2 relative z-10" style={{ fontFamily: "'Sora', sans-serif" }}>Expert Guidance</h4>
        <p className="text-white/80 text-xs mb-4 relative z-10">Get the latest insights on {category || "your business"} from our expert panel.</p>
        <button className="w-full bg-white text-[#C15F3C] font-bold py-2 rounded-xl text-sm hover:shadow-xl transition-all relative z-10">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
