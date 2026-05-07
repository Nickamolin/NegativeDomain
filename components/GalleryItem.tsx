"use client";

import React from "react";
import Image from "next/image";
import { Work } from "./types";

interface GalleryItemProps {
    work: Work;
    priority?: boolean;
    isActive?: boolean;
    onToggle?: () => void;
    isOverlay?: boolean;
}

export default function GalleryItem({ work, priority = false, isActive = false, onToggle, isOverlay = false }: GalleryItemProps) {
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
                    className={`w-full h-auto block object-cover transition-opacity duration-700 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 ${
                        isActive ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>
        );
    }

    return (
        <div className="w-full relative rounded-lg shadow-xl overflow-hidden pointer-events-none">
            {/* Base image — always desaturated by default, affected by CRT scanlines */}
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
        </div>
    );
}
