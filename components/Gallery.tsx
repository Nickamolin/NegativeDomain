import Image from 'next/image';
import { Work } from "./types";

interface GalleryProps {
    works: Work[];
}

export default function Gallery({ works }: GalleryProps) {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4 space-y-4">
            {works.map((work) => (
                <div key={work.id} className="break-inside-avoid">
                    <Image
                        src={work.src_url}
                        alt={work.title}
                        width={800}
                        height={1200}
                        className="w-full h-auto rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-500"
                        unoptimized={true}
                    />
                </div>
            ))}
        </div>
    );
}
