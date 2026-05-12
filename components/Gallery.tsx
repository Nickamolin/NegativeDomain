"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Work } from "./types";
import LoadingScreen from "./LoadingScreen";
import GalleryItem from "./GalleryItem";

interface GalleryProps {
    works: Work[];
}

export default function Gallery({ works }: GalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);
    const col3Ref = useRef<HTMLDivElement>(null);
    const isMountedRef = useRef(true);

    const [heights, setHeights] = useState([0, 0, 0]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setActiveId(prev => prev === id ? null : id);
    };

    useEffect(() => {
        let isActive = true;

        if (!works || works.length === 0) {
            setIsLoading(false);
            return;
        }

        const minDurationPromise = new Promise((resolve) => setTimeout(resolve, 1500));

        const imagesPromise = Promise.all(
            works.map(
                (work) =>
                    new Promise<void>((resolve) => {
                        let isResolved = false;
                        const complete = () => {
                            if (!isResolved) {
                                isResolved = true;
                                resolve();
                            }
                        };

                        const img = new window.Image();
                        img.onload = complete;
                        img.onerror = complete;
                        img.src = work.src_url;

                        if (img.complete) {
                            complete();
                        } else {
                            setTimeout(complete, 5000);
                        }
                    })
            )
        );

        Promise.all([minDurationPromise, imagesPromise])
            .then(() => {
                if (isActive) setIsLoading(false);
            })
            .catch(() => {
                if (isActive) setIsLoading(false);
            });

        const fallbackTimer = setTimeout(() => {
            if (isActive) setIsLoading(false);
        }, 6000);

        return () => {
            isActive = false;
            clearTimeout(fallbackTimer);
        };
    }, [works]);

    useEffect(() => {
        if (!col1Ref.current || !col2Ref.current || !col3Ref.current) return;

        const observer = new ResizeObserver(() => {
            setHeights([
                col1Ref.current?.offsetHeight || 0,
                col2Ref.current?.offsetHeight || 0,
                col3Ref.current?.offsetHeight || 0,
            ]);
        });

        observer.observe(col1Ref.current);
        observer.observe(col2Ref.current);
        observer.observe(col3Ref.current);

        return () => observer.disconnect();
    }, [works]);

    const maxHeight = Math.max(...heights, 1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, maxHeight - heights[0]]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, maxHeight - heights[1]]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, maxHeight - heights[2]]);

    const firstPart: Work[] = [];
    const secondPart: Work[] = [];
    const thirdPart: Work[] = [];

    works.forEach((work, i) => {
        if (i % 3 === 0) firstPart.push(work);
        else if (i % 3 === 1) secondPart.push(work);
        else thirdPart.push(work);
    });

    const renderGrid = (isOverlay: boolean) => (
        <div className="relative w-full px-4 py-4">
            {/* Mobile View */}
            <div className="flex flex-col gap-4 lg:hidden">
                {works.map((work, idx) => (
                    <GalleryItem
                        key={work.id}
                        work={work}
                        priority={idx < 3}
                        isActive={activeId === work.id}
                        onToggle={() => handleToggle(work.id)}
                        isOverlay={isOverlay}
                    />
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:grid grid-cols-3 gap-4 items-start">
                <motion.div ref={isOverlay ? null : col1Ref} style={{ y: y1 }} className="flex flex-col gap-4">
                    {firstPart.map((work, idx) => (
                        <GalleryItem
                            key={work.id}
                            work={work}
                            priority={idx === 0}
                            isActive={activeId === work.id}
                            onToggle={() => handleToggle(work.id)}
                            isOverlay={isOverlay}
                        />
                    ))}
                </motion.div>
                <motion.div ref={isOverlay ? null : col2Ref} style={{ y: y2 }} className="flex flex-col gap-4">
                    {secondPart.map((work, idx) => (
                        <GalleryItem
                            key={work.id}
                            work={work}
                            priority={idx === 0}
                            isActive={activeId === work.id}
                            onToggle={() => handleToggle(work.id)}
                            isOverlay={isOverlay}
                        />
                    ))}
                </motion.div>
                <motion.div ref={isOverlay ? null : col3Ref} style={{ y: y3 }} className="flex flex-col gap-4">
                    {thirdPart.map((work, idx) => (
                        <GalleryItem
                            key={work.id}
                            work={work}
                            priority={idx === 0}
                            isActive={activeId === work.id}
                            onToggle={() => handleToggle(work.id)}
                            isOverlay={isOverlay}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );

    return (
        <>
            {/* LoadingScreen is OUTSIDE the CRTWrapper so position:fixed works correctly */}
            <LoadingScreen isVisible={isLoading} />

            <div ref={containerRef} className="relative w-full">
                {/* Background Grid - each image has its own CRT effect */}
                {renderGrid(false)}

                {/* Foreground Grid - Clean overlays escaping the CRT stacking context */}
                <div className="absolute inset-0 pointer-events-none z-10000">
                    {renderGrid(true)}
                </div>
            </div>
        </>
    );
}