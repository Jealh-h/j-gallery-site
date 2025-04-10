"use client";

import { motion } from "framer-motion";
import React from "react";

interface MasonryGridProps {
  children: React.ReactNode;
}

export default function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {React.Children.map(children, (child) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileOutOfView={{ opacity: 0, y: 20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="break-inside-avoid mb-4"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
