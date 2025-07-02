import ImageCard from "@/components/ui/Card/ImageCard";

export default function MainPost() {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative w-full h-[316px] rounded-2xl overflow-hidden">
                <ImageCard
                    src="/logo.svg"
                    alt="News article 1"
                    href="/news/1"
                    text="Прочитать"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-2xl font-bold text-[#101828]">Первая Казахстанская платформа для спортивного программирования</div>
                <div className="text-lg font-medium text-[#344054]">Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text </div>
                <div className="mt-auto text-lg font-medium text-[#475467]">18.04.2025</div>
            </div>
        </div>
    )
}