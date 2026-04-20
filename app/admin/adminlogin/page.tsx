'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "https://cms.dostartup.in";
      const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
      
      // Query the custom 'admin' collection
      const res = await fetch(`${CMS_URL}/api/content/items/admin?token=${TOKEN}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const items = await res.json();

      // Handle Cockpit returning a single object, an array, or entries list
      let userList: any[] = [];
      if (Array.isArray(items)) {
        userList = items;
      } else if (items.entries && Array.isArray(items.entries)) {
        userList = items.entries;
      } else if (items && typeof items === 'object') {
        userList = [items];
      }

      if (userList.length > 0) {
        // Find matching credentials (robustly handling keys with spaces)
        const authenticatedUser = userList.find((u: any) => {
          // Flatten keys to remove spaces (e.g., "username " -> "username")
          const normalizedUser: any = {};
          Object.keys(u).forEach(k => {
            normalizedUser[k.trim().toLowerCase()] = u[k];
          });

          const uName = (normalizedUser.username || normalizedUser.name || "").toString().trim().toLowerCase();
          const uPass = (normalizedUser.password || "").toString().trim();
          
          return uName === username.trim().toLowerCase() && uPass === password.trim();
        });

        if (authenticatedUser) {
          router.push('/admin/dashboard');
          return;
        }
      } 
      
      setError('Invalid Admin Username or Password');
    } catch (err) {
      console.error('Login error:', err);
      setError('Connection failed. Please check your CMS settings.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center p-4 font-sans">
      {/* Container Card */}
      <div className="bg-[#F4F3EE] rounded-[2rem] shadow-2xl flex flex-col md:flex-row w-full max-w-[1000px] overflow-hidden min-h-[600px]">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-left">
            <div className="flex items-center space-x-2 text-[#C15F3C] mb-4">
               <ShieldCheck size={32} />
               <span className="font-black tracking-widest text-sm uppercase">Secure Portal</span>
            </div>
            <h1 className="text-[#C15F3C] text-5xl font-extrabold mb-3 tracking-tight">Admin Login</h1>
            <p className="text-[#6F6B63] text-lg font-medium">Please enter your administrative credentials</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-bold animate-pulse">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-[#2F2E2B] font-bold text-base ml-1">
                Admin Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Admin username"
                className="w-full bg-[#F4F3EE]/50 border-2 border-[#E5E2DA] rounded-2xl px-5 py-4 focus:border-[#C15F3C] focus:ring-4 focus:ring-[#C15F3C]/10 focus:outline-none transition-all duration-300 text-lg placeholder:text-[#B1ADA1]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-[#2F2E2B] font-bold text-base ml-1">
                Secret Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter secret password"
                  className="w-full bg-[#F4F3EE]/50 border-2 border-[#E5E2DA] rounded-2xl px-5 py-4 focus:border-[#C15F3C] focus:ring-4 focus:ring-[#C15F3C]/10 focus:outline-none transition-all duration-300 pr-14 text-lg placeholder:text-[#B1ADA1]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B1ADA1] hover:text-[#C15F3C] transition-colors p-2"
                >
                  {showPassword ? <EyeOff size={24} strokeWidth={2} /> : <Eye size={24} strokeWidth={2} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C15F3C] hover:bg-[#A94E30] text-white font-extrabold py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] mt-4 text-xl tracking-wide uppercase disabled:opacity-70 disabled:cursor-not-allowed"
            >
               {loading ? 'Authorizing...' : 'Authorize Access'}
            </button>
          </form>
        </div>

        {/* Right Side: Illustration (Using the same image for color consistency) */}
        <div className="hidden md:flex w-1/2 bg-[#FAFAF8] items-center justify-center p-12 relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C15F3C]/5 rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F4F3EE] rounded-full blur-[100px] opacity-60"></div>
          
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
             <div className="w-full max-w-sm">
                <Image 
                  src="/writer-login.png" 
                  alt="Admin Secure Area" 
                  width={800} 
                  height={800} 
                  className="object-contain drop-shadow-2xl grayscale-[0.2]"
                  priority
                />
             </div>
             <div className="mt-8 text-center max-w-xs">
                <div className="h-1.5 w-12 bg-[#C15F3C] mx-auto rounded-full mb-4"></div>
                <p className="text-[#6F6B63] italic font-medium uppercase tracking-[0.2em] text-xs">Administrative Operations Center</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
