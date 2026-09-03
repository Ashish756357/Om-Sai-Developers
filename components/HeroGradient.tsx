'use client';

import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

export default function HeroGradient() {
  return (
    <div className="hero-gradient" aria-hidden="true">
      <ShaderGradientCanvas
        className="h-full w-full"
        style={{ height: '100%', width: '100%' }}
        lazyLoad
        threshold={0.05}
        rootMargin="120px"
        pixelDensity={1}
        pointerEvents="none"
        powerPreference="high-performance"
      >
        <ShaderGradient
          type="plane"
          animate="on"
          uSpeed={0.08}
          uStrength={0.16}
          uDensity={1.2}
          uFrequency={2.4}
          uAmplitude={1.1}
          color1="#FAF7F2"
          color2="#D97757"
          color3="#9AAE9B"
          grain="on"
          grainBlending={0.08}
          lightType="3d"
          brightness={0.8}
          cAzimuthAngle={180}
          cPolarAngle={90}
          cDistance={3.8}
          cameraZoom={1}
        />
      </ShaderGradientCanvas>
    </div>
  );
}