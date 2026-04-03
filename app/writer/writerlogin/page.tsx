'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function WriterLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for login can be added here
    console.log("Writer Login Attempted", { username, password });
    router.push('/writer/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center p-4 font-sans">
      {/* Container Card */}
      <div className="bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row w-full max-w-[1000px] overflow-hidden min-h-[600px]">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-left">
            <h1 className="text-[#C15F3C] text-5xl font-extrabold mb-3 tracking-tight">Writer Login</h1>
            <p className="text-[#6F6B63] text-lg font-medium">Welcome back! Please enter your details</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-[#2F2E2B] font-bold text-base ml-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full bg-[#F4F3EE]/50 border-2 border-[#E5E2DA] rounded-2xl px-5 py-4 focus:border-[#C15F3C] focus:ring-4 focus:ring-[#C15F3C]/10 focus:outline-none transition-all duration-300 text-lg placeholder:text-[#B1ADA1]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-[#2F2E2B] font-bold text-base ml-1">
                Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
              className="w-full bg-[#C15F3C] hover:bg-[#A94E30] text-white font-extrabold py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] mt-4 text-xl tracking-wide uppercase"
            >
              Log in
            </button>
          </form>
        </div>

        {/* Right Side: Illustration */}
        <div className="hidden md:flex w-1/2 bg-[#FAFAF8] items-center justify-center p-12 relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FDF1EC] rounded-full blur-[80px] opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F4F3EE] rounded-full blur-[100px] opacity-60 animate-pulse delay-1000"></div>
          
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <div className="w-full max-w-sm transform hover:scale-105 transition-transform duration-700 ease-in-out">
              <Image 
                src="/writer-login.png" 
                alt="Writer Illustration" 
                width={800} 
                height={800} 
                className="object-contain drop-shadow-2xl grayscale-[0.2]"
                priority
              />
            </div>
            
            {/* Added some depth with floating elements or just clean layout */}
            <div className="mt-8 text-center max-w-xs">
              <div className="h-1.5 w-12 bg-[#C15F3C] mx-auto rounded-full mb-4"></div>
              <p className="text-[#6F6B63] italic font-medium">"Writing is the geometry of the soul."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
