'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X, Clock, User, Tag, Eye, Trash2 } from 'lucide-react';

interface PendingBlog {
  _id: string;
  title: string;
  content: any;
  category: string;
  writer_name: string;
  upload_date: string;
  status: string;
}

export default function AdminDashboard() {
  const [pendingBlogs, setPendingBlogs] = useState<PendingBlog[]>([]);
  const [allBlogs, setAllBlogs] = useState<PendingBlog[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'all'>('pending');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "https://cms.dostartup.in";
  const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";

  const fetchPendingBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${CMS_URL}/api/content/items/blogs?token=${TOKEN}`);
      const data = await res.json();
      const blogs = Array.isArray(data) ? data : (data.entries || []);
      
      if (blogs) {
        // Show all blogs EXCEPT deleted ones
        setAllBlogs(blogs
          .filter((b: any) => b.post_status !== 'deleted')
          .sort((a: any, b: any) => new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()));
        
        // Only show pending blogs for the pending list
        const pending = blogs.filter((b: any) => {
          const normalized: any = {};
          Object.keys(b).forEach(k => normalized[k.trim().toLowerCase()] = b[k]);
          return (normalized.post_status === "pending" || normalized.status === "pending") && normalized.post_status !== "deleted";
        });
        setPendingBlogs(pending);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingBlogs();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: 'published' | 'rejected') => {
    try {
      const res = await fetch(`${CMS_URL}/api/content/item/blogs?token=${TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            _id: id,
            post_status: newStatus === 'published' ? 'approved' : 'rejected'
          }
        }),
      });

      if (res.ok) {
        // Refresh the list
        fetchPendingBlogs();
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Error updating status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this blog permanently?")) return;

    try {
      const res = await fetch('/api/blogs/delete', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        fetchPendingBlogs();
      } else {
        alert("Failed to delete blog: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting blog");
    }
  };

  const handleLogout = () => {
    router.push('/admin/adminlogin');
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] p-8 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage writer requests and content approval</p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg active:scale-95"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto mb-8 flex gap-4">
        <button 
          onClick={() => setActiveTab('pending')}
          className={`px-6 py-2 rounded-xl font-bold transition-all ${activeTab === 'pending' ? 'bg-[#C15F3C] text-white shadow-lg' : 'bg-white text-gray-600 border border-[#E5E2DA]'}`}
        >
          Pending Requests ({pendingBlogs.length})
        </button>
        <button 
          onClick={() => setActiveTab('all')}
          className={`px-6 py-2 rounded-xl font-bold transition-all ${activeTab === 'all' ? 'bg-[#C15F3C] text-white shadow-lg' : 'bg-white text-gray-600 border border-[#E5E2DA]'}`}
        >
          All Blogs ({allBlogs.length})
        </button>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
           {activeTab === 'pending' ? <Clock className="text-[#C15F3C]" size={20} /> : <Tag className="text-[#C15F3C]" size={20} />}
           {activeTab === 'pending' ? "Pending Approval" : "All Blog Entries"}
        </h2>

        {loading ? (
          <div className="bg-white rounded-2xl p-20 text-center border border-[#E5E2DA] animate-pulse">
            <p className="text-gray-400 font-medium font-bold">Loading blogs...</p>
          </div>
        ) : (activeTab === 'pending' ? pendingBlogs : allBlogs).length === 0 ? (
          <div className="bg-white rounded-2xl p-20 text-center border border-[#E5E2DA] shadow-sm">
            <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeTab === 'pending' ? <Check size={32} /> : <Tag size={32} />}
            </div>
            <h3 className="text-gray-900 font-bold text-xl">No blogs found</h3>
            <p className="text-gray-500 mt-2">
              {activeTab === 'pending' ? "There are no pending article requests at the moment." : "No blogs have been created yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 pb-20">
            {(activeTab === 'pending' ? pendingBlogs : allBlogs).map((blog) => (
              <div key={blog._id} className="bg-white rounded-2xl border border-[#E5E2DA] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#FDF1EC] text-[#C15F3C] rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#C15F3C]/10 flex items-center gap-1">
                        <Tag size={12} /> {blog.category}
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{blog.upload_date}</span>
                      {(blog as any).post_status && (activeTab === 'all') && (
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${(blog as any).post_status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {(blog as any).post_status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
                    
                    <div className="bg-[#F9F8F6] rounded-xl p-4 border border-[#E5E2DA]/50">
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {typeof blog.content === 'string' ? blog.content : 
                          (Array.isArray(blog.content) ? blog.content[0] : "Click view to read full content...")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-xs py-1">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">
                        {blog.writer_name?.[0] || 'W'}
                      </div>
                      <span className="font-bold">Writer: {blog.writer_name}</span>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col gap-3 justify-center md:border-l md:pl-6 border-[#E5E2DA]">
                    {(activeTab === 'pending' || (blog as any).post_status !== 'approved') && (
                      <button 
                        onClick={() => handleStatusUpdate(blog._id, 'published')}
                        className="flex-1 md:w-40 flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-2.5 rounded-xl font-bold shadow-sm transition-all active:scale-95 text-sm"
                      >
                        <Check size={16} /> Approve
                      </button>
                    )}
                    
                    {activeTab === 'pending' && (
                       <button 
                        onClick={() => handleStatusUpdate(blog._id, 'rejected')}
                        className="flex-1 md:w-40 flex items-center justify-center gap-2 bg-white border border-red-100 text-red-500 hover:bg-red-50 px-4 py-2.5 rounded-xl font-bold transition-all active:scale-95 text-sm"
                      >
                        <X size={16} /> Reject
                      </button>
                    )}

                    <button 
                      onClick={() => handleDelete(blog._id)}
                      className="flex-1 md:w-40 flex items-center justify-center gap-2 bg-rose-50 text-rose-600 hover:bg-rose-100 px-4 py-2.5 rounded-xl font-bold transition-all text-xs"
                    >
                      <Trash2 size={14} /> {activeTab === 'all' ? "Delete Blog" : "Delete Permanently"}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
