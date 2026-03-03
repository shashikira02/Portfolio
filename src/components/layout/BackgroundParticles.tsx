'use client';

import Particles from './Particles';

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        particleColors={['#ffffff']}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={Math.min(window.devicePixelRatio, 1.5)}
        className=""
      />
    </div>
  );
};

export default BackgroundParticles;
