'use client';

import {Bell, User, ArrowLeft, ChevronLeft, ChevronRight} from "lucide-react";
import {useDashboardHeader} from "@/contexts/DashboardHeaderContext";

export default function DashboardHeader() {
    const { headerConfig } = useDashboardHeader();
    const { title, showBackButton, onBackClick } = headerConfig;

    return (
        <header className="bg-white sticky top-0 z-10 flex">
            <div className="flex justify-between p-6 w-full">
                <div className="flex items-center gap-4">
                    { showBackButton && (
                        <button
                            onClick={onBackClick}
                            className="hover:cursor-pointer px-2.5 py-2.5 hover:bg-[#F9FAFB] border border-[#D0D5DD] rounded-md h-10 w-10 flex-shrink-0 duration-300"
                        >
                            <ArrowLeft size={20} className="text-[#344054]" />
                        </button>
                    )}

                    <h1 className="font-semibold text-lg text-[#101828]">{title}</h1>
                </div>
                <div className="flex justify-between gap-6">
                    <button className="hover:cursor-pointer">
                        <Bell size={20} className="text-[#475467]" />
                    </button>

                    <button className="hover:cursor-pointer">
                        <User size={20} className="text-[#475467]" />
                    </button>
                </div>
            </div>
        </header>
    );
}