"use client";

import Carousel from "./ui/carousel";
export function Carousel_comp() {
  const slideData = [
    {
      title: "Action Classification",
      src: "/code.jpg",
    },
    {
      title: "Action Recognition",
      src: "/code.jpg",
    },
    {
      title: "Action Segmentation",
      src: "/code.jpg",
    },
    {
      title: "Text to Action",
      src: "/code.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-15">
      <Carousel slides={slideData} />
    </div>
  );
}
