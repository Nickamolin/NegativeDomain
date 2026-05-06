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

    const [heights, setHeights] = useState([0, 0, 0]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!works || works.length === 0) {
            setIsLoading(false);
            return;
        }

        let isMounted = true;

        // Enforce a minimum display time for the loading screen (e.g. 500ms)
        const minDurationPromise = new Promise((resolve) => setTimeout(resolve, 500));

        const imagesPromise = new Promise<void>((resolve) => {
            let loaded = 0;
            works.forEach((work) => {
                const img = new window.Image();
                img.src = work.src_url;

                const handleLoad = () => {
                    loaded++;
                    if (loaded === works.length) {
                        resolve();
                    }
                };

                img.onload = handleLoad;
                img.onerror = handleLoad; // Prevent getting stuck on broken image
            });
        });

        Promise.all([minDurationPromise, imagesPromise]).then(() => {
            if (isMounted) {
                setIsLoading(false);
            }
        });

        return () => {
            isMounted = false;
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

    return (
        <>
            <LoadingScreen isVisible={isLoading} />
            <div ref={containerRef} className="relative w-full px-4 md:px-8 py-4">
                {/* Mobile View */}
                <div className="flex flex-col gap-4 lg:hidden">
                    {works.map((work, idx) => (
                        <GalleryItem key={work.id} work={work} priority={idx < 3} />
                    ))}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-3 gap-4 items-start">
                    <motion.div ref={col1Ref} style={{ y: y1 }} className="flex flex-col gap-4">
                        {firstPart.map((work, idx) => (
                            <GalleryItem key={work.id} work={work} priority={idx === 0} />
                        ))}
                    </motion.div>
                    <motion.div ref={col2Ref} style={{ y: y2 }} className="flex flex-col gap-4">
                        {secondPart.map((work, idx) => (
                            <GalleryItem key={work.id} work={work} priority={idx === 0} />
                        ))}
                    </motion.div>
                    <motion.div ref={col3Ref} style={{ y: y3 }} className="flex flex-col gap-4">
                        {thirdPart.map((work, idx) => (
                            <GalleryItem key={work.id} work={work} priority={idx === 0} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}