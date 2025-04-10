"use client";

import { useState } from "react";
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
        {/* <div
          className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
        /> */}
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
            <Image
              src={src}
              alt={alt}
              width={width * 2}
              height={height * 2}
              className="object-contain"
            />
            <button
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
