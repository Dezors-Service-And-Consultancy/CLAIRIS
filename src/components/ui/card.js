"use client";
import React from "react";
import CardSpotlight from "@/components/ui/CardSpotlight";

export function Card({ children, className }) {
  return (
    <div className={`group relative bg-black text-white rounded-xl shadow border border-white/10 overflow-hidden ${className}`}>
      <CardSpotlight />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}


export function CardContent({ children, className }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
