import {Bell, User} from "lucide-react";

export default function DashboardHeader() {
    return (
        <header className="bg-white sticky top-0 z-10 flex">
            <div className="flex justify-between p-6 w-full">
                <h1 className="font-semibold text-lg text-[#101828]">Практика</h1>
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