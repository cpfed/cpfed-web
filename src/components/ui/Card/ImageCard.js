import Image from 'next/image';
import {MoreButtonGray} from "@/components/ui";

export default function ImageCard({ src, alt, href, text }) {
    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden group">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform  duration-500 group-hover:scale-105"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-4 right-4">
                    <MoreButtonGray href={href} text={text} className="shadow-md" />
                </div>
            </div>
        </div>
    );
}