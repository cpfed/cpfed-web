'use client';

import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import {
    GraduationCap,
    SquareTerminal,
    FileBadge2,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Info,
    LogOutIcon,
    UserCog
} from "lucide-react";
import Image from "next/image";
import {useState} from "react";

export default function Sidebar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(true);
    const [isLectureOpen, setIsLectureOpen] = useState(true);

    const currentLectureLevel = searchParams.get('level') || (pathname.startsWith('lecture') ? 'bronze' : null);
    const lectureItems = [
        {
            text: 'Бронзовый',
            level: 'bronze'
        },
        {
            text: 'Серебряный',
            level: 'silver'
        },
        {
            text: 'Золотой',
            level: 'gold'
        }
    ];

    return (
        <aside className="flex sticky top-0">
            <div
                className={`font-semibold pt-8 px-4 space-y-6 border-r border-r-[#E4E7EC] flex flex-col transition-all duration-300 ease-in-out ${
                    isOpen ? 'w-[312px]' : 'w-21'
                }`}>
                <div className="flex justify-between items-center">
                    <div className={`flex gap-2 transition-all duration-300 ease-in-out ${
                        isOpen ? 'px-2 opacity-100' : 'opacity-0 w-0 overflow-hidden'
                    }`}>
                        <Image
                            src="/logo.svg"
                            alt="CPFED logo"
                            width={23}
                            height={32}
                        />
                        <Link href="/" className="flex items-center">
                            <span className="text-[#0E8AC8] font-semibold text-xl cursor-pointer">CPFED</span>
                        </Link>
                    </div>

                    <button
                        className="hover:cursor-pointer hover:bg-[#F9FAFB] duration-300 px-3 py-2 w-13 h-13 rounded-sm flex-shrink-0"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <ChevronLeft size={24} className="text-[#475467] transition-transform duration-300"/>
                        ) : (
                            <ChevronRight size={24} className="text-[#475467] transition-transform duration-300"/>
                        )}
                    </button>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-1">
                        <li>
                            <button
                                onClick={() => setIsLectureOpen(!isLectureOpen)}
                                className={`flex gap-3 items-center px-3 py-2 h-13 w-full rounded-sm hover:bg-[#F9FAFB] hover:cursor-pointer transition-colors duration-300 ${
                                    pathname.startsWith('/lecture') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                                }`}
                            >
                                <GraduationCap size={24} className={`${pathname.startsWith('/lecture') ? "text-[#0E8AC8]": "text-[#667085]"} flex-shrink-0`} />

                                <div className="flex-1 flex justify-between">
                                    <span className={`transition-all duration-300 ease-in-out ${
                                        isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
                                    }`}>Обучение
                                    </span>

                                    <div className={`flex gap-2 transition-all duration-300 ease-in-out ${
                                        isOpen ? 'px-2 opacity-100' : 'opacity-0 w-0 overflow-hidden'
                                    }`}>
                                        {isLectureOpen ? <ChevronUp className="text-[#667085]" /> : <ChevronDown className="text-[#667085]" />}
                                    </div>
                                </div>
                            </button>

                            <ul className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                isOpen && isLectureOpen ? 'max-h-[200px] mt-2' : 'max-h-0'
                            }`}>
                                {lectureItems.map((item, index) => {
                                    const isActive = currentLectureLevel === item.level;

                                    return (
                                        <li
                                            key={item.level}

                                        >
                                            <Link href={`/lecture?level=${item.level}`}
                                                  className={`flex pl-12 items-center h-13 rounded-sm transition-all duration-300 ease-in-out hover:cursor-pointer ${
                                                      isLectureOpen
                                                          ? 'opacity-100 translate-y-0'
                                                          : 'opacity-0 translate-y-2'
                                                  } ${
                                                      isActive
                                                          ? 'text-[#182230] bg-[#F9FAFB]'
                                                          : 'text-[#344054]'
                                                  } ${
                                                      isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
                                                  }`}
                                                  style={{
                                                      transitionDelay: isLectureOpen ? `${(index + 1) * 50}ms` : '0ms'
                                                  }}
                                            >{item.text}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>

                        <li>
                            <Link href="/practice"
                                  className={`flex gap-3 items-center px-3 py-2 h-13 rounded-sm hover:bg-[#F9FAFB] transition-colors duration-300 ${
                                      pathname.startsWith('/practice') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                                  }`}>
                                <SquareTerminal size={24} className={`${pathname.startsWith('/practice') ? "text-[#0E8AC8]": "text-[#667085]"} flex-shrink-0`} />
                                <span className={`transition-all duration-300 ease-in-out ${
                                    isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
                                }`}>Практика</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/tests"
                                  className={`flex gap-3 items-center px-3 py-2 h-13 rounded-sm hover:bg-[#F9FAFB] transition-colors duration-300 ${
                                      pathname.startsWith('/tests') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                                  }`}>
                                <FileBadge2 size={24} className={`${pathname.startsWith('/tests') ? "text-[#0E8AC8]": "text-[#667085]"} flex-shrink-0`} />
                                <span className={`transition-all duration-300 ease-in-out ${
                                    isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
                                }`}>Тесты</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/admin"
                                  className={`flex gap-3 items-center px-3 py-2 h-13 rounded-sm hover:bg-[#F9FAFB] transition-colors duration-300 ${
                                      pathname.startsWith('/admin') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                                  }`}>
                                <UserCog size={24} className={`${pathname.startsWith('/admin') ? "text-[#0E8AC8]": "text-[#667085]"} flex-shrink-0`} />
                                <span className={`transition-all duration-300 ease-in-out ${
                                    isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
                                }`}>Админ</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="space-y-6 mt-auto">
                    <Link href="/#faq" className="flex gap-3 items-center px-3 py-2 h-13 duration-300">
                        <Info size={24} className="text-[#667085] flex-shrink-0"/>
                        <span className={`text-[#344054] transition-all duration-300 ease-in-out ${
                            isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
                        }`}>FAQ</span>
                    </Link>

                    <div className={`flex pt-6 h-16 border-t border-t-[#E4E7EC] transition-all duration-300 ease-in-out ${
                        isOpen ? 'px-2' : 'px-0 justify-center'
                    }`}>
                        {isOpen ? (
                            <>
                                <Image
                                    src="/logo.svg"
                                    alt="Profile photo"
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-[#0E8AC8]"
                                />

                                <div className={`flex flex-col ml-3 transition-all duration-300 ease-in-out ${
                                    isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                                }`}>
                                    <h2 className="font-semibold text-[#344054] whitespace-nowrap">ФИО</h2>
                                    <span className="text-[#475467] text-sm whitespace-nowrap">login</span>
                                </div>

                                <Link href="/logout" className="ml-auto flex items-center">
                                    <LogOutIcon size={20} className="text-[#475467]"/>
                                </Link>
                            </>
                        ) : (
                            <Link href="/logout" className="flex items-center justify-center w-full rounded-sm hover:bg-[#F9FAFB]">
                                <LogOutIcon size={20} className="text-[#475467]" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}