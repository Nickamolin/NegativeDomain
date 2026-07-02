import React from 'react';
import Gallery from "./Gallery";
import { localWorks } from "@/lib/works";

export default function Projects() {
    // Reverse the works array to display the latest works first, matching previous order
    const works = [...localWorks].reverse();

    return (
        <Gallery works={works} />
    );
}