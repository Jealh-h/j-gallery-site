"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const categories = [
  { id: "portrait", name: "人像摄影", icon: "👤" },
  { id: "street", name: "人文摄影", icon: "🏘️" },
  { id: "landscape", name: "风景摄影", icon: "🏔️" },
  { id: "wildlife", name: "野生动物", icon: "🦁" },
  { id: "architecture", name: "建筑摄影", icon: "🏛️" },
  { id: "macro", name: "微距摄影", icon: "🔍" },
  { id: "night", name: "夜景摄影", icon: "🌙" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 200; // 卡片宽度
  const gap = 24; // 卡片间距

  // 处理滚动时激活卡片的变化
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;
      const scrollPosition = carouselRef.current.scrollLeft;
      const activeIdx = Math.round(scrollPosition / (cardWidth + gap));
      setActiveIndex(activeIdx);
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener("scroll", handleScroll);
    return () => carousel?.removeEventListener("scroll", handleScroll);
  }, []);

  // 滚动到指定卡片
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <PageTransition>
      <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] items-center w-full max-w-4xl">
          <h1 className="text-3xl font-bold">Nikon 摄影作品集</h1>

          {/* 轮播容器 */}
          <div className="relative w-full">
            {/* 轮播轨道 */}
            <div
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="flex items-center snap-center flex-shrink-0 w-[200px] h-[240px]"
                  onClick={() => scrollToCard(index)}
                >
                  <Link
                    href={`/category/${category.id}`}
                    className="block w-full"
                  >
                    <motion.div
                      className={`relative rounded-xl bg-white shadow-lg transition-all duration-300 ${
                        // 移除 overflow-hidden
                        activeIndex === index ? "shadow-xl" : ""
                      }`}
                      animate={{
                        transform:
                          activeIndex === index ? "scaleY(1.1)" : "scaleY(1)", // 新增 translateY 补偿顶部溢出
                      }}
                    >
                      <div className="aspect-square flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-4xl mb-4">{category.icon}</span>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          {category.name}
                        </h2>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>

            {/* 左右滚动按钮 */}
            <button
              onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md disabled:opacity-50"
              aria-label="上一个分类"
            >
              ←
            </button>
            <button
              onClick={() =>
                scrollToCard(Math.min(categories.length - 1, activeIndex + 1))
              }
              disabled={activeIndex === categories.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md disabled:opacity-50"
              aria-label="下一个分类"
            >
              →
            </button>
          </div>
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Support by <span className="text-red-500 animate-ping">❤</span>
        </footer>
      </div>
    </PageTransition>
  );
}
