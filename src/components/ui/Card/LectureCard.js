import {Eye} from 'lucide-react';
import Link from "next/link";

export default function LectureCard() {
    return (
        <div className="min-h-[220px] flex-1 bg-[#E2F4FD] text-[#101828] rounded-xl border border-[#E4E7EC] shadow-xs">
            <div className="px-4 py-5 space-y-6">
                <h2 className="font-medium font-md">Наименование наименование наименование наименование</h2>
                <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border-[#E4E7EC] border rounded-lg shadow-xs">
                        <Eye size={24} className="text-[#344054]"/>
                    </div>
                    <span>20 463 раз</span>
                </div>
            </div>

            <div className="border-t h-15 border-t-[#E4E7EC] px-3 flex justify-between items-center">
                <span className="text-sm">12.02.2030</span>
                <Link
                    href="/lecture/1"
                    className="px-4 py-2 bg-white font-semibold text-sm text-[#344054] rounded-md hover:bg-[#F9FAFB] hover:text-[#182230] transition-all duration-300 shadow-md"
                >
                    Прочитать
                </Link>
            </div>
        </div>
    );
}