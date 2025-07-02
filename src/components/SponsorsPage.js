import Image from "next/image";

export default function SponsorsPage() {
    const sponsors = Array(5).fill("/sponsor_1.svg");

    return (
        <div className="overflow-hidden w-full">
            <div className="px-5 py-5 flex gap-3.5 animate-[scroll_30s_linear_infinite]">
                {sponsors.map((src, index) => (
                    <div key={`set1-${index}`} className="w-[368px] h-[110px] flex justify-center flex-shrink-0">
                        <Image
                            src={src}
                            alt="Sponsors"
                            width={150}
                            height={41}
                        />
                    </div>
                ))}
                {sponsors.map((src, index) => (
                    <div key={`set2-${index}`} className="w-[368px] h-[110px] flex justify-center flex-shrink-0">
                        <Image
                            src={src}
                            alt="Sponsors"
                            width={150}
                            height={41}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}