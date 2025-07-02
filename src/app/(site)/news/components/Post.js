import ImageCard from "@/components/ui/Card/ImageCard";

export default function Post(props) {
    return (
        <div className="flex gap-6 h-full">
            <div className={`${props.topNews ? "pb-5 flex-1" : "w-[470px] flex-shrink-0 "}`}>
                <ImageCard
                    src="/logo.svg"
                    alt="News article 1"
                    href="/news/1"
                    text="Прочитать"
                />
            </div>

            <div className={`${props.topNews ? "flex-1" : ""} flex flex-col gap-4 w-full`}>
                <div className="text-2xl font-bold text-[#101828]">Первая Казахстанская платформа для спортивного программирования</div>
                <div className="text-lg font-medium text-[#344054]">Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text</div>
                <div className="mt-auto text-lg font-medium text-[#475467]">18.04.2025</div>
            </div>
        </div>
    )
}