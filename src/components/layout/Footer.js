import {Phone, Mail, MapPin} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-[348px] p-8">
            <div className="bg-[#F9FAFB] rounded-[20px] h-full">
                <div className="flex justify-between flex-wrap pt-12 px-12 pb-0">
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-xl font-semibold text-[#333]">CPFED</h3>
                    </div>

                    <div className="flex-2 min-w-[250px] flex justify-center">
                        <div className="flex gap-8">
                            <div className="flex flex-col gap-4 list-none">
                                <Link href="/news" className="no-underline font-semibold text-[#182230] hover:text-[#0E8AC8] duration-300">Новости</Link>
                                <Link href="/ratings" className="no-underline font-semibold text-[#182230] hover:text-[#0E8AC8] duration-300">Рейтинги</Link>
                            </div>

                            <ul className="flex flex-col gap-4 list-none">
                                <Link href="/contests" className="no-underline font-semibold text-[#182230] hover:text-[#0E8AC8] duration-300">Соревнования</Link>
                                <Link href="https://cpfed.kz/" className="no-underline font-semibold text-[#182230] hover:text-[#0E8AC8] duration-300">О нас</Link>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 min-w-[250px]">
                        <div className="flex flex-col gap-1 font-semibold text-[#475467]">
                            <div className="flex gap-2">
                                <Phone size={20} className="flex-shrink-0" />
                                <span>+7 701 966 20 23</span>
                            </div>
                            <div className="flex gap-2">
                                <Mail size={20} className="flex-shrink-0" />
                                <span>admin@cpfed.kz</span>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                                <MapPin size={20} className="flex-shrink-0" />
                                <span>г. Астана, ул. Мангилик ел, 55/7, блок С 3.5, офис 211, Astana Hub</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-[#475467] text-xl mt-[68px] pt-0 px-12 pb-12">
                    <p>&copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}