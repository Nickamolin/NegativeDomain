"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Work } from "./types";
import CRTWrapper from "./CRTWrapper";

interface GalleryItemProps {
    work: Work;
    priority?: boolean;
    isActive?: boolean;
    onToggle?: () => void;
    isOverlay?: boolean;
}

export default function GalleryItem({ work, priority = false, isActive = false, onToggle, isOverlay = false }: GalleryItemProps) {
    // All hooks must come before any early returns (Rules of Hooks)
    // Start with a neutral SSR-safe default; randomise on the client after hydration
    const [sweepDuration, setSweepDuration] = useState(8);
    const crtRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only applies to base (non-overlay) items
        if (isOverlay) return;

        // Generate random values client-side only to avoid hydration mismatch
        const duration = 4 + Math.random() * 8;
        const phase = -(Math.random() * duration);

        setSweepDuration(duration);

        // Apply a negative animation-delay to the sweep element so each image
        // starts mid-cycle — no two images will fire their sweep at the same time
        if (!crtRef.current) return;
        crtRef.current.querySelectorAll<HTMLElement>("*").forEach(el => {
            const anim = window.getComputedStyle(el).animationName;
            if (anim && anim !== "none") {
                el.style.animationDelay = `${phase}s`;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // intentionally empty — runs once on mount

    if (isOverlay) {
        return (
            <div
                onClick={() => {
                    // Use pointer: coarse to reliably detect touch devices (mobile/tablet)
                    // (hover: none) can be unreliable on mobile browsers that emulate hover
                    if (window.matchMedia('(pointer: coarse)').matches) {
                        onToggle?.();
                    }
                }}
                className="group w-full relative rounded-lg overflow-hidden pointer-events-auto"
            >
                <img
                    src={work.src_url}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className={`w-full h-auto block object-cover transition-opacity duration-700 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 ${isActive ? "opacity-100" : "opacity-0"
                        }`}
                />
            </div>
        );
    }

    return (
        <div className="w-full relative rounded-lg shadow-xl overflow-hidden pointer-events-none">
            {/* Base image — always desaturated by default, individually affected by CRT scanlines */}
            <div ref={crtRef}>
                <CRTWrapper sweepDuration={sweepDuration} enableSweep={false}>
                    <Image
                        src={work.src_url}
                        alt={work.title}
                        width={800}
                        height={1200}
                        className="w-full h-auto block saturate-0 transition-all duration-700"
                        unoptimized={true}
                        draggable={false}
                        priority={priority}
                    />
                </CRTWrapper>
            </div>
        </div>
    );
}
