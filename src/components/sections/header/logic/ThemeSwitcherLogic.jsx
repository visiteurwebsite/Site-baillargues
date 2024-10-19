'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeSwitcher } from '../rendering/ThemeSwitcher';

export function ThemeSwitcherLogic() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ThemeSwitcher theme={theme} setTheme={setTheme} />;
}
