import React from 'react';
import { Work } from "./types";

interface GalleryProps {
    works: Work[];
}

export default function Gallery({ works }: GalleryProps) {
    return (
        <div>
            {works.map((work) => (
                <div key={work.id}>
                    <h1>{work.title}</h1>
                    <img src={work.src_url} alt={work.title} />
                    <p>{work.date_published}</p>
                </div>
            ))}
        </div>
    );
}
