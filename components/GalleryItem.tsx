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
                className="w-full h-auto hover:scale-[1.02] transition-transform duration-500"
                unoptimized={true}
                draggable={false}
                priority={priority}
            />
        </div>
    );
}
