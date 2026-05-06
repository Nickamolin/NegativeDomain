"use client";

import React from "react";
import CRTEffect from "vault66-crt-effect";
import "vault66-crt-effect/dist/vault66-crt-effect.css";

interface CRTWrapperProps {
    children: React.ReactNode;
}

export default function CRTWrapper({ children }: CRTWrapperProps) {
    return (
        <CRTEffect
            enabled={true}
            sweepDuration={20}
            sweepThickness={20}
            sweepStyle="classic"
            scanlineOpacity={0.05}
            scanlineThickness={4}
            scanlineGap={4}
            scanlineColor="rgba(91,179,135,0.2)"
            enableScanlines={true}
            scanlineOrientation="horizontal"
            enableSweep={true}
            theme="custom"
            enableGlow={false}
            glowColor="rgba(0,255,128,0.3)"
            enableEdgeGlow={false}
            edgeGlowColor="rgba(0,255,128,0.2)"
            edgeGlowSize={30}
            enableFlicker={true}
            flickerIntensity={0.08} // low, medium, high, or number
            flickerSpeed={0.8} // low, medium, high, number
            enableGlitch={true}
            glitchIntensity={0.1} // low, medium, high, number
            glitchSpeed={3} // low, medium, high, number
            enableVignette={true}
            vignetteIntensity={0.4}
        >
            {children}
        </CRTEffect >
    );
}
