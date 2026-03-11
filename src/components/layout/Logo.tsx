'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Placeholder to prevent layout shift
  }

  return (
    <Image
      src={theme === 'dark' ? '/logo-light.svg' : '/logo-dark.svg'}
      alt="SK Logo"
      width={32}
      height={32}
      className="transition-opacity"
    />
  );
};

export default Logo;
