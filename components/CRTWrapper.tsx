"use client";

import React from "react";
import CRTEffect from "vault66-crt-effect";
import "vault66-crt-effect/dist/vault66-crt-effect.css";

interface CRTWrapperProps {
    children: React.ReactNode;

    // Sweep
    sweepDuration?: number;
    sweepThickness?: number;
    sweepStyle?: "classic" | "soft";
    enableSweep?: boolean;

    // Scanlines
    enableScanlines?: boolean;
    scanlineOpacity?: number;
    scanlineThickness?: number;
    scanlineGap?: number;
    scanlineColor?: string;
    scanlineOrientation?: "horizontal" | "vertical";

    // Glow
    enableGlow?: boolean;
    glowColor?: string;

    // Edge glow
    enableEdgeGlow?: boolean;
    edgeGlowColor?: string;
    edgeGlowSize?: number;

    // Vignette
    enableVignette?: boolean;
    vignetteIntensity?: number;

    // Flicker
    enableFlicker?: boolean;
    flickerIntensity?: number | "low" | "medium" | "high";
    flickerSpeed?: number | "low" | "medium" | "high";

    // Glitch
    enableGlitch?: boolean;
    glitchIntensity?: number | "low" | "medium" | "high";
    glitchSpeed?: number | "low" | "medium" | "high";
}

export default function CRTWrapper({
    children,
    // Sweep
    sweepDuration = 5,
    sweepThickness = 10,
    sweepStyle = "classic",
    enableSweep = true,
    // Scanlines
    enableScanlines = true,
    scanlineOpacity = 0.05,
    scanlineThickness = 4,
    scanlineGap = 4,
    scanlineColor = "rgba(91,179,135,0.2)",
    scanlineOrientation = "horizontal",
    // Glow
    enableGlow = false,
    glowColor = "rgba(0,255,128,0.3)",
    // Edge glow
    enableEdgeGlow = false,
    edgeGlowColor = "rgba(0,255,128,0.2)",
    edgeGlowSize = 30,
    // Vignette
    enableVignette = true,
    vignetteIntensity = 0.4,
    // Flicker
    enableFlicker = true,
    flickerIntensity = 0.08,
    flickerSpeed = 0.8,
    // Glitch
    enableGlitch = true,
    glitchIntensity = 0.1,
    glitchSpeed = 3,
}: CRTWrapperProps) {
    return (
        <CRTEffect
            enabled={true}
            theme="custom"
            // Sweep
            enableSweep={enableSweep}
            sweepDuration={sweepDuration}
            sweepThickness={sweepThickness}
            sweepStyle={sweepStyle}
            // Scanlines
            enableScanlines={enableScanlines}
            scanlineOpacity={scanlineOpacity}
            scanlineThickness={scanlineThickness}
            scanlineGap={scanlineGap}
            scanlineColor={scanlineColor}
            scanlineOrientation={scanlineOrientation}
            // Glow
            enableGlow={enableGlow}
            glowColor={glowColor}
            // Edge glow
            enableEdgeGlow={enableEdgeGlow}
            edgeGlowColor={edgeGlowColor}
            edgeGlowSize={edgeGlowSize}
            // Vignette
            enableVignette={enableVignette}
            vignetteIntensity={vignetteIntensity}
            // Flicker
            enableFlicker={enableFlicker}
            flickerIntensity={flickerIntensity}
            flickerSpeed={flickerSpeed}
            // Glitch
            enableGlitch={enableGlitch}
            glitchIntensity={glitchIntensity}
            glitchSpeed={glitchSpeed}
        >
            {children}
        </CRTEffect>
    );
}
