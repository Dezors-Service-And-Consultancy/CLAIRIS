"use client"

import React from "react";
import { Search, ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Aurora } from "@/components/aurora";
import Head from "next/head";

const categories = [
  "All Topics",
  "Animation",
  "Branding",
  "Case Study",
  "Development",
  "Illustration",
  "UI/UX",
];

const blogs = [
  {
    title: "Turn Your Ideas Into Videos: No Camera, No Problem",
    desc: "Create engaging videos using AI-driven tools. No fancy setup required.",
    image: "/New image.png",
    author: "Alex Chen",
    date: "April 5, 2025",
    readTime: "5 min read"
  },
  {
    title: "How Text-to-Video is Changing Content Creation",
    desc: "Discover the power of converting simple text into compelling videos.",
    image: "/New image.png",
    author: "Jamie Wilson",
    date: "April 3, 2025",
    readTime: "8 min read"
  },
  {
    title: "AI Video Enhancers: Are They Worth the Hype?",
    desc: "We tested top tools that enhance low-quality videos. Here's what we found.",
    image: "/New image.png",
    author: "Taylor Kim",
    date: "March 30, 2025",
    readTime: "6 min read"
  },
  {
    title: "Create Studio-Quality Videos at Home",
    desc: "Tips and tools for creators who want polished content on a budget.",
    image: "/New image.png",
    author: "Jordan Park",
    date: "March 27, 2025",
    readTime: "7 min read"
  },
  {
    title: "5 Mistakes New Creators Make (and How to Avoid Them)",
    desc: "Before you hit 'record', learn what NOT to do as a beginner.",
    image: "/New image.png",
    author: "Casey Morgan",
    date: "March 24, 2025",
    readTime: "4 min read"
  },
  {
    title: "Boost Your Video Engagement with These Simple Tweaks",
    desc: "Learn how small changes can lead to big watch-time improvements.",
    image: "/New image.png",
    author: "Avery Zhang",
    date: "March 21, 2025",
    readTime: "5 min read"
  }
];

export default function RewardsPage() {
  return (
    <>
      {/* Proper way to add head content in Next.js */}
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" />
      </Head>
      
      <div className="relative flex w-full min-h-screen bg-black flex-col items-center overflow-hidden">
        {/* Aurora background */}
        <div className="fixed inset-0 w-full h-full">
          <Aurora className="w-full h-full" />
        </div>
        
        {/* Header/Navigation with glassmorphism */}
        <header className="relative z-20 w-full bg-black/40 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and Search Bar Container */}
            <div className="flex items-center gap-8 w-full md:w-auto">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Blog Logo" 
                className="h-12 w-auto object-contain"
              />
              
              {/* Enhanced search bar */}
              <div className="flex items-center w-full md:w-72 bg-black/30 border border-gray-700/50 rounded-full px-4 py-2 shadow-lg hover:border-white/50 transition-all duration-300 group">
                <Search className="w-4 h-4 text-white mr-3 group-hover:text-white" />
                <Input
                  placeholder="Search articles..."
                  className="bg-transparent text-sm text-white placeholder:text-white/50 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 w-full font-['DM_Sans']"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-10 text-base font-medium text-white font-['DM_Sans'] tracking-wide">
              <a href="#" className="relative hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Blog</a>
              <a href="#" className="relative hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Home</a>
              <a href="#" className="relative hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">About</a>
              <a href="#" className="relative hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Getting Started</a>
            </nav>
          </div>
        </header>
        
        {/* Main content*/}
        <main className="relative z-10 max-w-7xl w-full mx-auto px-6 py-12 space-y-16">
          {/* Hero section */}
          <section className="pt-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Cormorant_Garamond'] tracking-tight leading-tight">Creative Video Blog</h1>
            <p className="text-xl text-white mb-10 max-w-2xl font-['DM_Sans'] font-light leading-relaxed">Explore the latest trends, tools, and techniques in video creation, AI enhancements, and content optimization.</p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-3 text-sm mb-8 font-['DM_Sans']">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className={`cursor-pointer px-5 py-2 rounded-full transition-colors ${
                    i === 0 
                      ? 'bg-black text-white font-medium' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </section>

          {/* Latest Articles*/}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center font-['Cormorant_Garamond']">
              <span className="mr-3 inline-block w-1 h-8 bg-white"></span>
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <Card key={index} className="group bg-gray-900/20 backdrop-blur-sm border-0 hover:bg-gray-900/40 transition-all duration-300 shadow-lg overflow-hidden rounded-xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                      
                      <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center text-xs text-white font-['DM_Sans']">
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors line-clamp-2 font-['Cormorant_Garamond'] leading-tight">{blog.title}</h4>
                      <p className="text-base text-white/90 mb-5 line-clamp-2 font-['DM_Sans'] font-light">{blog.desc}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/80 font-['DM_Sans']">{blog.date}</span>
                        <a href="#" className="inline-flex items-center text-xs font-medium px-4 py-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors font-['DM_Sans'] tracking-wide">
                          Read article
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a href="#" className="inline-block px-8 py-3.5 bg-black/70 hover:bg-black/80 text-white font-medium rounded-full transition-colors backdrop-blur-sm border border-white/30 font-['DM_Sans'] tracking-wide text-base">
                View All Articles
              </a>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="relative z-20 w-full bg-black/60 backdrop-blur-md border-t border-gray-800/50 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <img 
                  src="/logo.png" 
                  alt="Blog Logo" 
                  className="h-10 w-auto object-contain mb-3"
                />
                <p className="text-sm text-white/80 font-['DM_Sans'] font-light">Inspiring creators since 2025</p>
              </div>
              <div className="flex flex-wrap gap-10 text-sm text-white/80 font-['DM_Sans']">
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-800/50 text-center text-xs text-white/70 font-['DM_Sans']">
              © 2025 Creative Video Blog. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}