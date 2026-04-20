'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Clock, CheckCircle, AlertCircle, Eye, Tag } from 'lucide-react';

const SERVICE_PAGES = [
  "12a-80g-registration", "12a-registration", "15ca-15cb-filing", "80g-registration", 
  "adt-1-filing", "aoa-amendment", "apeda-registration", "authorized-capital-increase", 
  "barcode-registration", "bis-certification", "bookkeeping", "business-plan", 
  "business-tax-filing", "central-approvals", "certificate-incumbency", "commencement-inc-20a", 
  "company-compliance", "company-itr-filing", "company-registration", "copyright-objection", 
  "copyright-registration", "darpan-registration", "demat-of-shares", "design-objection", 
  "design-registration", "digital-signature", "din-ekyc-filing", "din-reactivation", 
  "director-change", "dormant-status-filing", "dpt-3-filing", "drug-license", 
  "esi-registration", "esi-return-filing", "expedited-tm-registration", "fcra-registration", 
  "fdi-filing-rbi", "fire-license", "fla-return-filing", "fssai", "fssai-license", 
  "fssai-renewal", "fssai-return-filing", "government-schemes", "gst-amendment", 
  "gst-annual-return", "gst-einvoice", "gst-lut", "gst-notice", "gst-registration", 
  "gst-registration-for-foreigners", "gst-return-filing", "gst-revocation", "gstr-10", 
  "halal-certificate", "icegate-registration", "import-export-code", "income-tax", 
  "income-tax-efiling", "income-tax-notice", "indian-subsidiary", "iso-registration", 
  "itr-1-return-filing", "itr-2-return-filing", "itr-3-return-filing", "itr-4-return-filing", 
  "itr-5-return-filing", "itr-6-return-filing", "itr-7-return-filing", "lei-code", 
  "llp-compliance", "llp-form-11-filing", "llp-registartion", "logo-designing", 
  "moa-amendment", "name-change-company", "one-person-company", "opc-compliance", 
  "partnership", "partnership-compliance", "partnership-llp-itr", "patent-registration", 
  "peso", "pf-registration", "pf-return-filing", "producer-company-registration", 
  "professional-tax-registration", "professional-tax-return-filing", "proprietorship", 
  "proprietorship-compliance", "public-limited-company", "rcmc-registration", 
  "registered-office-change", "remove-director", "rera-registration-agents", 
  "section-8-company-registration", "share-transfer", "shop-establishment-act-registration", 
  "start-up-india", "state-approvals", "tan-registration", "tds-return-filing", 
  "trade-license", "trademark-hearing", "trademark-infringement-notice", "trademark-objection", 
  "trademark-opposition", "trademark-protection", "trademark-rectification", "trademark-registration", 
  "trademark-renewal", "trademark-transfer", "trust-ngo-tax-filing", "trust-registration", 
  "udyam-registration", "virtual-office", "winding-up-llp", "windup-company"
];

export default function WriterDashboard() {
  const [activeTab, setActiveTab] = useState('create');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('Writer');
  
  React.useEffect(() => {
    const storedName = localStorage.getItem('writerName');
    if (storedName) setAuthorName(storedName);
  }, []);
  const [postImageFile, setPostImageFile] = useState<File | null>(null);
  const [authorImageFile, setAuthorImageFile] = useState<File | null>(null);
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [myPosts, setMyPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const fetchMyPosts = async () => {
    setLoadingPosts(true);
    try {
      const res = await fetch(`${CMS_URL}/api/content/items/blogs?token=${TOKEN}`);
      const data = await res.json();
      const allBlogs = Array.isArray(data) ? data : (data.entries || []);
      
      // Filter blogs by this writer's name
      const filtered = allBlogs.filter((b: any) => 
        (b.writer_name === authorName || b.author_name === authorName)
      ).sort((a: any, b: any) => new Date(b._created * 1000).getTime() - new Date(a._created * 1000).getTime());
      
      setMyPosts(filtered);
    } catch (error) {
      console.error("Error fetching my posts:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'posts') {
      fetchMyPosts();
    }
  }, [activeTab, authorName]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch('/api/blogs/delete', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchMyPosts();
      } else {
        alert("Failed to delete post: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting post");
    }
  };

  const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "https://cms.dostartup.in";
  const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";

  const uploadAsset = async (file: File) => {
    const formData = new FormData();
    formData.append('files[]', file);

    try {
      const res = await fetch(`${CMS_URL}/api/assets/upload?token=${TOKEN}`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data && data.assets && data.assets.length > 0) {
        return data.assets[0];
      }
      return null;
    } catch (error) {
      console.error("Asset upload error details:", error);
      return null;
    }
  };

  const handleSubmit = async () => {
    if (!title || !content || !category) {
      alert("Please fill all required fields (Category, Title, Content)");
      return;
    }

    setSubmitLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('category', category);
      formData.append('authorName', authorName);
      if (postImageFile) formData.append('postImage', postImageFile);
      if (authorImageFile) formData.append('authorImage', authorImageFile);

      const res = await fetch('/api/blogs/create', {
        method: "POST",
        body: formData,
      });

      let responseData;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server returned non-JSON: ${text.slice(0, 100)}`);
      }

      if (res.ok && responseData.success) {
        setSubmitSuccess(true);
        setTitle("");
        setContent("");
        setCategory("");
        setPostImageFile(null);
        setAuthorImageFile(null);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(responseData.error || "Failed to create post");
      }
    } catch (error: any) {
      console.error("Submission error details:", error);
      alert(`Error: ${error.message || "Something went wrong during submission"}`);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleLogout = () => {
    router.push('/writer/writerlogin');
  };

  return (
    <div className="min-h-screen bg-white p-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-[800px] flex justify-between items-center mb-6">
        <h1 className="text-lg font-bold text-gray-800">
          Welcome, <span className="text-gray-900 font-extrabold">{authorName}</span> 👋
        </h1>
        <button onClick={handleLogout} className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-5 py-2 rounded-lg font-bold transition-colors text-sm shadow-sm">
          Logout
        </button>
      </div>

      <div className="w-full max-w-[800px] flex space-x-2 mb-8">
        <button onClick={() => setActiveTab('create')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'create' ? 'bg-[#3b82f6] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Create Post
        </button>
        <button onClick={() => setActiveTab('posts')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'posts' ? 'bg-[#3b82f6] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          My Posts
        </button>
      </div>

      <div className="w-full max-w-[800px] bg-white border border-[#E5E2DA] rounded-xl p-8 shadow-sm">
        {activeTab === 'create' ? (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Create a New Post</h2>
            {submitSuccess && <div className="p-3 bg-green-50 text-green-600 text-sm rounded-lg border border-green-200">Post submitted successfully! Sent for admin approval.</div>}

            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-gray-400">Category (Select Page Name)</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-blue-500 focus:outline-none bg-white appearance-none cursor-pointer" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="" disabled>Select the targeted page</option>
                  {SERVICE_PAGES.map(page => <option key={page} value={page}>{page}</option>)}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-gray-400">Title</label>
              <input type="text" placeholder="Enter title" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-gray-400">Content</label>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className="bg-[#ffffff] border-b border-gray-200 p-2 flex flex-wrap items-center gap-2">
                  <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 text-xs font-bold text-gray-700">Bold</button>
                  <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 text-xs font-bold text-gray-700">Italic</button>
                  <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 text-xs font-bold text-gray-700">Underline</button>
                </div>
                <textarea className="w-full h-64 p-6 focus:outline-none resize-none text-sm leading-relaxed" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Start writing your insights..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] uppercase font-bold text-gray-400">Post Image</label>
              <div className="flex items-center gap-3">
                 <span className="text-[9px] text-gray-300 font-bold italic">[16:9 recommended]</span>
                <label className="cursor-pointer bg-[#dbeafe] hover:bg-[#bfdbfe] text-[#1e40af] px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2">
                  Choose File <span className="text-[10px] font-medium opacity-70 truncate max-w-[150px]">{postImageFile ? postImageFile.name : "No file chosen"}</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => setPostImageFile(e.target.files?.[0] || null)} />
                </label>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-gray-400">Author Name</label>
              <input type="text" placeholder="Enter Author Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] uppercase font-bold text-gray-400">Author Image</label>
              <label className="w-fit cursor-pointer bg-[#dbeafe] hover:bg-[#bfdbfe] text-[#1e40af] px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2">
                Choose File <span className="text-[10px] font-medium opacity-70 truncate max-w-[150px]">{authorImageFile ? authorImageFile.name : "No file chosen"}</span>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => setAuthorImageFile(e.target.files?.[0] || null)} />
              </label>
            </div>

            <div className="pt-4">
              <button onClick={handleSubmit} disabled={submitLoading} className="w-fit bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-2.5 rounded-lg font-bold shadow-sm transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
                {submitLoading ? "Uploading & Posting..." : "Create Post"}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">My Submitted Posts</h2>
              <button 
                onClick={fetchMyPosts} 
                className="text-[10px] font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest"
              >
                Refresh List
              </button>
            </div>

            {loadingPosts ? (
              <div className="py-20 text-center animate-pulse text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                Loading your articles...
              </div>
            ) : myPosts.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <AlertCircle size={24} />
                </div>
                <p className="uppercase tracking-widest text-[#B1ADA1] text-[10px] font-black">
                  No posts found. Start writing your first article!
                </p>
                <button 
                  onClick={() => setActiveTab('create')}
                  className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest"
                >
                  Create New Post
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {myPosts.map((post) => (
                  <div key={post._id} className="group bg-white border border-[#E5E2DA] rounded-xl p-5 hover:border-blue-200 transition-all hover:shadow-sm">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-bold uppercase tracking-wider border border-gray-200">
                            {post.category}
                          </span>
                          
                          {/* Status Badges */}
                          {post.post_status === 'approved' || post.post_status === 'published' ? (
                            <span className="flex items-center gap-1 text-[9px] font-bold text-green-600 uppercase tracking-wider">
                              <CheckCircle size={10} /> Published
                            </span>
                          ) : post.post_status === 'rejected' ? (
                            <span className="flex items-center gap-1 text-[9px] font-bold text-red-500 uppercase tracking-wider">
                              <AlertCircle size={10} /> Rejected
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[9px] font-bold text-amber-500 uppercase tracking-wider">
                              <Clock size={10} /> Pending Approval
                            </span>
                          )}
                        </div>

                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{post.title}</h3>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{post.upload_date}</p>
                      </div>

                      <div className="flex items-center gap-2">
                         <button 
                          onClick={() => handleDelete(post._id)}
                          className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete Post"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
