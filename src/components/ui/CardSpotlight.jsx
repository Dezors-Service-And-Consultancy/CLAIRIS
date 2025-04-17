"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function CardSpotlight() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 400 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(255,255,255,0.06), transparent 80%)`
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top } = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 z-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background }}
    />
  );
}
