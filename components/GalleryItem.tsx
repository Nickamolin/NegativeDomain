"use client";

import React from "react";
import Image from "next/image";
import { Work } from "./types";

interface GalleryItemProps {
    work: Work;
    priority?: boolean;
}

export default function GalleryItem({ work, priority = false }: GalleryItemProps) {
    return (
        <div className="w-full relative rounded-lg shadow-xl overflow-hidden group">
            <Image
                src={work.src_url}
                alt={work.title}
                width={800}
                height={1200}
                className="w-full h-auto transition-all duration-500 [@media(hover:hover)_and_(pointer:fine)]:saturate-0 [@media(hover:hover)_and_(pointer:fine)]:hover:saturate-100"
                unoptimized={true}
                draggable={false}
                priority={priority}
            />
        </div>
    );
}
