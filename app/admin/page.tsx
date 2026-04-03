'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  FileText, 
  Globe, 
  MessageSquare, 
  LogOut 
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/admin/adminlogin');
  };

  const cards = [
    {
      title: 'Writer Management',
      desc: 'Manage writer accounts, permissions, and content contributions.',
      icon: Users,
      color: 'text-[#e01e5a]',
      bgColor: 'bg-[#fdf2f8]',
      link: '/admin/writers'
    },
    {
      title: 'Post Management',
      desc: 'Approve or delete posts submitted by writers.',
      icon: FileText,
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#eff6ff]',
      link: '/admin/posts'
    },
    {
      title: 'Website Content Management',
      desc: 'Update static website content and configuration.',
      icon: Globe,
      color: 'text-[#22c55e]',
      bgColor: 'bg-[#f0fdf4]',
      link: '/admin/content'
    },
    {
      title: 'Comments Approval',
      desc: 'Review and approve user comments.',
      icon: MessageSquare,
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#fffbeb]',
      link: '/admin/comments'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Navbar - Admin Style */}
      <nav className="bg-[#1a202c] px-8 py-4 flex items-center justify-between text-white shadow-xl">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-extrabold tracking-tighter uppercase italic">
            WCRT Admin Pannel
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest text-gray-300">
           <Link href="#" className="hover:text-white transition-colors cursor-pointer">Dashboard</Link>
           <Link href="#" className="hover:text-white transition-colors cursor-pointer">Writers</Link>
           <Link href="#" className="hover:text-white transition-colors cursor-pointer">Posts</Link>
           <Link href="#" className="hover:text-white transition-colors cursor-pointer text-gray-400">Website Content</Link>
        </div>

        <button 
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-[#ff4d4d] hover:bg-red-600 px-6 py-2 rounded-lg font-black transition-all active:scale-95"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16 space-y-12">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl font-black text-[#2d3748] tracking-tighter">
             Admin Dashboard of WCRT
          </h1>
          <p className="text-xl text-[#718096] font-medium italic">
             Welcome! Use the cards below to manage the site.
          </p>
        </div>

        {/* Dashboard Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
           {cards.map((card, i) => (
             <Link key={i} href={card.link} className="group cursor-pointer">
               <div className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 h-full shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 group">
                 <div className={`w-16 h-16 ${card.bgColor} ${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                   <card.icon size={32} />
                 </div>
                 <h3 className="text-2xl font-black text-[#2d3748] mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                   {card.title}
                 </h3>
                 <p className="text-[#a0aec0] font-medium leading-relaxed">
                   {card.desc}
                 </p>
               </div>
             </Link>
           ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-gray-50/50 p-6 border-t border-gray-100 text-center">
         <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
           System Infrastructure v1.2.0 • Secured by doStartup
         </p>
      </div>
    </div>
  );
}
