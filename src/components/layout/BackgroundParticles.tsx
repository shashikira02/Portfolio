'use client';

import Particles from './Particles';

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        particleColors={['#ffffff']}
        particleCount={600}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        className=""
      />
    </div>
  );
};

export default BackgroundParticles;
