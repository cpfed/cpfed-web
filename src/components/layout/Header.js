'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Image from "next/image";
import {Button, ChangeLangButton} from "@/components/ui";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white sticky top-0 z-10 shadow-sm">
            <div className={styles.container}>
                <div className="text-2xl font-semibold flex flex-1 gap-2">
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

                <nav className="block flex-[2] text-center">
                    <ul className="list-none flex gap-1 items-center justify-center no-underline text-[#344054] font-semibold">
                        <li>
                            <Link href="/news" className={`hover:text-[#0E8AC8] duration-300 px-3 py-2 rounded-sm ${
                                pathname.startsWith('/news') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                            }`}>Новости</Link>
                        </li>
                        <li>
                            <Link href="/ratings" className={`hover:text-[#0E8AC8] duration-300 px-3 py-2 rounded-sm ${
                                pathname.startsWith('/ratings') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                            }`}>Рейтинги</Link>
                        </li>
                        <li className="h-full">
                            <Link href="/contests" className={`h-full hover:text-[#0E8AC8] duration-300 px-3 py-2 rounded-sm ${
                                pathname.startsWith('/contests') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                            }`}>Соревнования</Link>
                        </li>
                        <li>
                            <Link href="https://cpfed.kz/" className={`hover:text-[#0E8AC8] duration-300 px-3 py-2 rounded-sm ${
                                pathname.startsWith('/about') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                            }`}>О нас</Link>
                        </li>
                        <li>
                            <Link href="/contacts" className={`hover:text-[#0E8AC8] duration-300 px-3 py-2 rounded-sm ${
                                pathname.startsWith('/contacts') ? 'bg-[#F9FAFB] text-[#182230]' : 'text-[#344054]'
                            }`}>Контакты</Link>
                        </li>
                    </ul>
                </nav>

                <nav className={styles.navList}>
                    <li><ChangeLangButton/></li>
                    <li><Button height="h-10" width="w-[74px]" font="text-sm" text="Войти" link="/login"/></li>
                </nav>
            </div>
        </header>
    );
}