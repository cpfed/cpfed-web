import TopNews from "@/app/(site)/news/components/TopNews";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {SeeAllButton} from "@/components/ui";

export default function NewsPage() {
    return (
        <div className="bg-[#F2F4F7] px-16 py-8 flex flex-col gap-6">
            <div className="flex justify-between">
                <div className="font-bold text-4xl">Новости</div>
                <SeeAllButton link="/news" text="Перейти ко всем новостям"/>
            </div>
            <TopNews/>
        </div>
    );
}