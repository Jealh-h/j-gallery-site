"use client";

import { useState, useEffect } from "react"; // 添加useEffect导入
import { motion } from "framer-motion";
import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImagePreview({
  src,
  alt,
  width,
  height,
}: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 添加滚动控制逻辑
  useEffect(() => {
    if (isOpen) {
      // 模态框打开时禁止body滚动
      document.body.style.overflow = "hidden";
    } else {
      // 模态框关闭时恢复body滚动
      document.body.style.overflow = "auto";
    }

    // 组件卸载时确保恢复滚动
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative cursor-pointer overflow-hidden rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 预览模态框 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] mx-auto">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>
          <button
            className="absolute top-10 right-10 text-white text-2xl hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </>
  );
}
