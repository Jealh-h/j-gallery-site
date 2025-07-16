'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full"
      aria-label="切换主题"
    >
      {mounted ? (
        currentTheme === 'dark' ? '🌞 切换至亮色' : '🌙 切换至暗色'
      ) : (
        '加载中...'
      )}
    </button>
  );
}