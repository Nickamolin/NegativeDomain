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
            enableScanlines={true}
            scanlineOpacity={0.15}
            enableSweep={true}
            enableFlicker={true}
            flickerIntensity="low"
            enableGlitch={true}
            glitchIntensity="low"
            enableVignette={true}
            vignetteIntensity={0.3}
            enableGlow={false}
            enableEdgeGlow={false}
        >
            {children}
        </CRTEffect>
    );
}
