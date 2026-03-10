'use client';

import { useTheme } from 'next-themes';
import Particles from './Particles';
import { useEffect, useState } from 'react';

const BackgroundParticles = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, [])

  if (!mounted) return null;

  const particleColor = theme ==='dark'?'#ffffff':'#000000'

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        particleColors={[particleColor]}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}
        className=""
      />
    </div>
  );
};

export default BackgroundParticles;
