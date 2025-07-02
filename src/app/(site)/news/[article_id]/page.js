'use client';

import Image from "next/image";
import {useBreadcrumb} from "@/contexts/BreadcrumbContext";
import {use, useEffect} from "react";

export default function ArticlePage({ params }) {
    const { article_id } = use(params);
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs([
            {
                label: 'Новости',
                path: '/news'
            },
            {
                label: 'Первая Казахстанская платформа для спортивного программирования',
                path: `news/${article_id}`
            }
        ]);
    }, [article_id, setBreadcrumbs]);

    return (
        <div className="flex flex-col gap-6 py-6 px-16">
            <div className="flex flex-col gap-6">
                <div className="relative w-full h-[612px] rounded-2xl overflow-hidden">
                    <Image
                        src="/logo.svg"
                        alt="CPFED logo"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="text-2xl font-bold text-[#101828]">Первая Казахстанская платформа для спортивного программирования</div>
                <div className="text-lg font-medium text-[#344054]">Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text  Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text  Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text  Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text  Text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text </div>
                <div className="text-lg font-medium text-[#475467]">18.04.2025</div>
            </div>
        </div>
    );
}