'use client';

import Link from 'next/link';
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import {useBreadcrumb} from "@/contexts/BreadcrumbContext";

export default function Breadcrumb() {
    const { breadcrumbs } = useBreadcrumb();

    return (
        <nav aria-label="Breadcrumb" className="px-16 pt-6">
            <ol className="font-semibold text-xl flex items-center gap-3">
                {breadcrumbs.map((item, i) => (
                    <Fragment key={i}>
                        <li>
                            <Link href={item.path} className={`${i === breadcrumbs.length - 1 && i > 0 ? 'text-[#0C75AA]' : 'text-[#475467]'}`}>
                                {item.label}
                            </Link>
                        </li>

                        { i < breadcrumbs.length - 1 && (
                            <li>
                                <ChevronRight size={16} className="text-[#D0D5DD]" />
                            </li>
                        )}
                    </Fragment>
                ))}
            </ol>
        </nav>
    );
}