"use client";

import React from "react";
import Image from "next/image";
import CRTWrapper from "./CRTWrapper";

interface LoadingScreenProps {
    isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
    const [shouldRender, setShouldRender] = React.useState(isVisible);

    React.useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 700);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender && !isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-99999 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="max-w-[50vw] max-h-[50vh]">
                <CRTWrapper enableScanlines={false} enableSweep={false} flickerIntensity={0.1}>
                    <Image
                        src="/branding/logo.jpg"
                        alt="Negative Domain Logo"
                        width={200}
                        height={200}
                        priority
                        className="w-auto h-auto block object-contain max-w-full max-h-full"
                        draggable={false}
                    />
                </CRTWrapper>
            </div>
        </div>
    );
}
