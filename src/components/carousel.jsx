"use client";

import Carousel from "./ui/carousel";
export function Carousel_comp() {
  const slideData = [
    {
      title: "Action Classification",
      src: "/image1.png",
    },
    {
      title: "Action Recognition",
      src: "/image2.jpg",
    },
    {
      title: "Action Segmentation",
      src: "/image3.png",
    },
    {
      title: "Text to Action",
      src: "/image4.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-15">
      <Carousel slides={slideData} />
    </div>
  );
}
