"use client";

import React from "react";
import CRTEffect from "vault66-crt-effect";
import "vault66-crt-effect/dist/vault66-crt-effect.css";

interface CRTWrapperProps {
    children: React.ReactNode;
}

export default function CRTWrapper({ children }: CRTWrapperProps) {
    return (
        <CRTEffect preset="minimal">
            {children}
        </CRTEffect>
    );
}
