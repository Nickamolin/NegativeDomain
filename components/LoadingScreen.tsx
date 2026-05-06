"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
    isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 z-100 bg-black"
                >
                    <div className="sticky top-0 h-dvh w-full flex items-center justify-center">
                        <Image
                            src="/branding/logo.jpg"
                            alt="Negative Domain Logo"
                            width={200}
                            height={200}
                            priority
                            className="w-auto h-auto max-w-[50%] max-h-[50%] object-contain"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
