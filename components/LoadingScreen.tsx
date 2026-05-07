"use client";

import React from "react";
import Image from "next/image";

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
            <Image
                src="/branding/logo.jpg"
                alt="Negative Domain Logo"
                width={200}
                height={200}
                priority
                className="w-auto h-auto max-w-[50%] max-h-[50%] object-contain"
                draggable={false}
            />
        </div>
    );
}
