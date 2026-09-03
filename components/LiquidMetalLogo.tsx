'use client';

import { LiquidMetal } from '@paper-design/shaders-react';

export default function LiquidMetalLogo() {
  return (
    <span className="liquid-logo" aria-hidden="true">
      <LiquidMetal
        shape="metaballs"
        colorBack="#6E3326"
        colorTint="#F6C2A4"
        distortion={0.22}
        contour={0.25}
        softness={0.7}
        repetition={2.2}
        speed={0.12}
        style={{ height: '100%', width: '100%', display: 'block' }}
      />
    </span>
  );
}