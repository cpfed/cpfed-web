import Image from "next/image";
import Link from "next/link";
import {MoreButton} from "@/components/ui";
import InfoCard from "@/components/InfoCard";

export default function InfoPage() {
    return (
        <section className="flex flex-col gap-12 px-16 py-8">
            <div className="flex justify-between">
                <div className="pt-[138px] pb-[138px] pl-0 pr-8 flex flex-col gap-4 w-[684px]">
                    <div className="text-2xl font-semibold flex gap-2">
                        <Image
                            src="/logo.svg"
                            alt="CPFED logo"
                            width={23}
                            height={32}
                        />

                        <Link href="/">
                            <span className="text-[#0E8AC8] cursor-pointer">CPFED</span>
                        </Link>
                    </div>

                    <div className="font-bold text-4xl">Первая Казахстанская платформа для спортивного программирования</div>

                    <div>
                        <MoreButton link="https://cpfed.kz/" icon={true} width="" />
                    </div>
                </div>

                <div className="bg-[#98A2B3] w-[916px] h-[520px] rounded-2xl" />
            </div>
            <div className="flex gap-6">
                <InfoCard title="Онлайн платформа для обучения" description="Text text text text text text text text text text text text text text texttext text text text text text text" />
                <InfoCard title="База знаний на основе запросов" description="Text text text text text text text text text text text text text text texttext text text text text text text" />
                <InfoCard title="Персонализированная платформа" description="Text text text text text text text text text text text text text text texttext text text text text text text" />
                <InfoCard title="Наименование преимущества" description="Text text text text text text text text text text text text text text texttext text text text text text text" />
            </div>
        </section>
    );
}