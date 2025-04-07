import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const categories = [
  "All Topics",
  "Animation",
  "Branding",
  "Case Study",
  "Development",
  "Illustration",
  "UI/UX",
];

const mockItems = new Array(6).fill(0);

export default function RewardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 border rounded-md px-3 py-1.5 w-72">
          <Search className="w-4 h-4 text-gray-500" />
          <Input placeholder="Search..." className="border-none focus:outline-none" />
        </div>
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#">Blog</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Getting Started</a>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
        {categories.map((cat, i) => (
          <span
            key={i}
            className="cursor-pointer hover:text-black transition-colors"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Latest */}
      <h2 className="text-xl font-semibold mb-4">Latest</h2>
      <div className="flex gap-6 mb-12">
        <img
          src="https://via.placeholder.com/200"
          alt="Laptop Image"
          className="w-60 h-40 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-medium mb-2">Redeem a free year of Rewards</h3>
          <p className="text-sm text-gray-700 mb-2 max-w-xl">
            The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today,
            it served as a placeholder for actual content. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <a href="#" className="text-blue-500 text-sm">Read more...</a>
        </div>
      </div>

      {/* View Latest */}
      <h3 className="text-lg font-semibold mb-4">View Latest</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockItems.map((_, index) => (
          <Card key={index} className="rounded-md overflow-hidden">
            <CardContent className="p-0">
              <img
                src="https://via.placeholder.com/200"
                alt="Laptop Image"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-sm font-medium mb-1">Redeem a free year of Rewards</h4>
                <p className="text-xs text-gray-600">
                  The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today,
                  it served as a placeholder for actual content.
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
