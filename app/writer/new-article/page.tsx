'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Save, 
  Send, 
  Image as ImageIcon, 
  Type, 
  List, 
  Link as LinkIcon, 
  Bold, 
  Italic, 
  Eye,
  Settings,
  Tag,
  Globe
} from 'lucide-react';

export default function NewArticlePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="border-b border-[#E5E2DA] px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-4">
          <Link href="/writer/dashboard" className="p-2 hover:bg-[#F4F3EE] rounded-full transition-colors text-[#6F6B63] hover:text-[#C15F3C]">
            <ChevronLeft size={24} />
          </Link>
          <div className="h-6 w-[1px] bg-[#E5E2DA] mx-2"></div>
          <span className="text-[#B1ADA1] font-medium italic">Draft in "Business News"</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 text-[#6F6B63] hover:text-[#C15F3C] font-bold transition-colors">
            <Save size={18} />
            <span className="hidden sm:inline">Save Draft</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2.5 bg-[#C15F3C] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95">
            <Send size={18} />
            <span>Publish Article</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor Section */}
        <main className="flex-1 overflow-y-auto bg-[#F4F3EE]/30 p-8 md:p-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Featured Image Placeholder */}
            <div className="w-full aspect-[21/9] bg-white rounded-[2rem] border-2 border-dashed border-[#E5E2DA] flex flex-col items-center justify-center group hover:border-[#C15F3C] transition-colors cursor-pointer overflow-hidden shadow-sm">
              <div className="flex flex-col items-center space-y-2 group-hover:scale-105 transition-transform duration-500">
                <div className="p-4 bg-[#FDF1EC] rounded-2xl text-[#C15F3C]">
                  <ImageIcon size={32} />
                </div>
                <span className="text-[#6F6B63] font-bold">Add Featured Image</span>
                <span className="text-xs text-[#B1ADA1]">1200 x 630 suggested</span>
              </div>
            </div>

            {/* Title Input */}
            <textarea
              placeholder="Article Title..."
              className="w-full bg-transparent border-none focus:ring-0 text-5xl font-black text-[#2F2E2B] placeholder:text-[#E5E2DA] resize-none min-h-[100px] leading-tight focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Toolbar (Simplified) */}
            <div className="sticky top-4 bg-white/90 backdrop-blur-md rounded-2xl p-2 flex items-center space-x-2 shadow-2xl border border-[#E5E2DA] w-fit mx-auto mb-10 translate-y-[-20px] opacity-0 animate-fade-in hover:opacity-100 transition-opacity">
              <button className="p-3 hover:bg-[#FDF1EC] hover:text-[#C15F3C] rounded-xl transition-colors"><Bold size={20} /></button>
              <button className="p-3 hover:bg-[#FDF1EC] hover:text-[#C15F3C] rounded-xl transition-colors"><Italic size={20} /></button>
              <div className="h-6 w-[1px] bg-[#E5E2DA] mx-2"></div>
              <button className="p-3 hover:bg-[#FDF1EC] hover:text-[#C15F3C] rounded-xl transition-colors"><Type size={20} /></button>
              <button className="p-3 hover:bg-[#FDF1EC] hover:text-[#C15F3C] rounded-xl transition-colors"><List size={20} /></button>
              <button className="p-3 hover:bg-[#FDF1EC] hover:text-[#C15F3C] rounded-xl transition-colors"><LinkIcon size={20} /></button>
              <div className="h-6 w-[1px] bg-[#E5E2DA] mx-2"></div>
              <button className="p-3 hover:bg-[#FDF1EC] hover:text-[#C15F3C] rounded-xl transition-colors"><ImageIcon size={20} /></button>
            </div>

            {/* Editor Content Area */}
            <textarea
              placeholder="Start writing your story..."
              className="w-full bg-transparent border-none focus:ring-0 text-xl text-[#2F2E2B] placeholder:text-[#E5E2DA] resize-none min-h-[500px] leading-relaxed focus:outline-none pb-20"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </main>

        {/* Settings Sidebar */}
        <aside className="hidden lg:flex w-[350px] bg-white border-l border-[#E5E2DA] flex-col p-8 overflow-y-auto space-y-10 shadow-2xl">
          <div className="flex items-center space-x-2 text-[#C15F3C] font-black uppercase tracking-widest text-xs">
            <Settings size={16} />
            <span>Article Settings</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[#B1ADA1] font-bold text-xs uppercase ml-1">Permalink</label>
              <div className="flex items-center bg-[#F4F3EE] rounded-xl px-4 py-3 border border-[#E5E2DA] focus-within:border-[#C15F3C] transition-colors group">
                <Globe size={18} className="text-[#B1ADA1] mr-2 group-focus-within:text-[#C15F3C]" />
                <span className="text-xs text-[#B1ADA1]">dostartup.com/</span>
                <input type="text" className="bg-transparent border-none focus:ring-0 p-0 text-xs text-[#2F2E2B] font-bold w-full" placeholder="url-slug" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[#B1ADA1] font-bold text-xs uppercase ml-1">Category</label>
              <select className="w-full bg-[#F4F3EE] rounded-xl px-4 py-3 border border-[#E5E2DA] focus:border-[#C15F3C] focus:ring-0 transition-colors text-sm font-bold text-[#6F6B63] appearance-none">
                <option>Business News</option>
                <option>Startups</option>
                <option>Technology</option>
                <option>Finance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[#B1ADA1] font-bold text-xs uppercase ml-1 block">Tags</label>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#FDF1EC] text-[#C15F3C] rounded-full font-bold text-xs flex items-center gap-1 border border-[#C15F3C]/20">
                  Startup <Tag size={12} />
                </span>
                <span className="px-3 py-1 bg-[#FDF1EC] text-[#C15F3C] rounded-full font-bold text-xs flex items-center gap-1 border border-[#C15F3C]/20">
                  News <Tag size={12} />
                </span>
              </div>
              <input type="text" placeholder="Add more..." className="w-full bg-[#F4F3EE] rounded-xl px-4 py-3 border border-[#E5E2DA] focus:border-[#C15F3C] focus:ring-0 transition-colors text-sm font-bold text-[#6F6B63]" />
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-[#B1ADA1] font-bold text-xs uppercase ml-1 block">Excerpt</label>
              <textarea placeholder="Write a short summary..." className="w-full bg-[#F4F3EE] rounded-xl px-4 py-3 border border-[#E5E2DA] focus:border-[#C15F3C] focus:ring-0 transition-colors text-sm text-[#6F6B63] min-h-[100px]"></textarea>
            </div>
          </div>

          <div className="pt-10 space-y-4">
            <button className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-[#F4F3EE] hover:bg-[#E5E2DA] transition-colors text-sm font-bold text-[#6F6B63]">
              <div className="flex items-center space-x-3">
                <Eye size={18} className="text-[#B1ADA1]" />
                <span>Preview Mode</span>
              </div>
              <ChevronLeft className="rotate-180 text-[#B1ADA1]" size={16} />
            </button>
            <p className="text-[10px] text-[#B1ADA1] text-center uppercase font-black tracking-widest px-8">Last saved at 12:45 PM by Alex</p>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
