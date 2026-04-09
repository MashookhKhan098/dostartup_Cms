'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WriterDashboard() {
  const [activeTab, setActiveTab] = useState('create');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleLogout = () => {
    router.push('/writer/writerlogin');
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] p-8 font-sans">
      {/* Top Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, <span className="text-gray-900">KashviHaria</span> 👋
        </h1>
        <button 
          onClick={handleLogout}
          className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto flex space-x-4 mb-10">
        <button 
          onClick={() => setActiveTab('create')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'create' ? 'bg-[#3b82f6] text-white shadow-md' : 'bg-[#F4F3EE] text-gray-600 hover:bg-gray-200'
          }`}
        >
          Create Post
        </button>
        <button 
          onClick={() => setActiveTab('posts')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'posts' ? 'bg-[#3b82f6] text-white shadow-md' : 'bg-[#F4F3EE] text-gray-600 hover:bg-gray-200'
          }`}
        >
          My Posts
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto bg-[#F4F3EE] border border-gray-200 rounded-xl p-8 shadow-sm">
        {activeTab === 'create' ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Create a New Post</h2>

            {/* Category selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#F4F3EE] appearance-none cursor-pointer"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>Select a category</option>
                <option value="business">Business</option>
                <option value="startup">Startup</option>
                <option value="technology">Technology</option>
              </select>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input 
                type="text"
                placeholder="Enter title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content Area with Toolbar */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                {/* Toolbar */}
                <div className="bg-[#F4F3EE] border-b border-gray-200 p-2 flex flex-wrap items-center gap-3">
                  <button className="px-3 py-1 bg-[#F4F3EE] border border-gray-200 rounded hover:bg-[#F4F3EE] font-medium text-gray-700">Bold</button>
                  <button className="px-3 py-1 bg-[#F4F3EE] border border-gray-200 rounded hover:bg-[#F4F3EE] font-medium text-gray-700">Italic</button>
                  <button className="px-3 py-1 bg-[#F4F3EE] border border-gray-200 rounded hover:bg-[#F4F3EE] font-medium text-gray-700">Underline</button>
                  <select className="border border-gray-200 rounded px-2 py-1 bg-[#F4F3EE] text-sm text-gray-700 outline-none">
                    <option>Default Font</option>
                    <option>Arial</option>
                    <option>Times New Roman</option>
                  </select>
                  <div className="flex items-center space-x-2 ml-2">
                    <span className="text-sm text-gray-600">Color:</span>
                    <div className="w-8 h-4 bg-black rounded cursor-pointer border border-gray-300"></div>
                  </div>
                </div>
                {/* Textarea */}
                <textarea 
                  className="w-full h-64 p-6 focus:outline-none resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Post Images section */}
            <div className="space-y-4 pt-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Post Image</label>
                <div className="flex items-center space-x-3">
                  <input type="file" className="block w-fit text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100 cursor-pointer
                  "/>
                </div>
              </div>

              <div className="space-y-1 border-t border-gray-100 pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Post</label>
                <div className="flex items-center space-x-3">
                  <input type="file" className="block w-fit text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100 cursor-pointer
                  "/>
                </div>
              </div>

              <div className="space-y-1 border-t border-gray-100 pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Author Image</label>
                <div className="flex items-center space-x-3">
                  <input type="file" className="block w-fit text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100 cursor-pointer
                  "/>
                </div>
              </div>
            </div>

            {/* Final Action Button */}
            <div className="pt-6">
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95">
                Create Post
              </button>
            </div>
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-gray-400 font-medium">Your posts will appear here.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
