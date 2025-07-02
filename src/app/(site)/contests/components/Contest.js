import Link from "next/link";
import Image from "next/image";

export default function Contest() {
    return (
        <div className="flex-shrink-0 w-[610px] h-[308px] p-4 bg-[#E2F4FD] rounded-2xl flex gap-6">
            <Image
                src="/logo.svg"
                alt="CPFED logo"
                width={293}
                height={276}
                className="flex-1 rounded-2xl relative bg-white"
            />

            <div className="flex-1 flex flex-col justify-between">
                <h1 className="font-bold text-xl">Первая Казахстанская платформа для спортивного программирования</h1>
                <h2 className="font-medium text-lg text-[#344054]">Text text text text text text text text text text text text text text </h2>
                <Link href="/participate" className="h-10 w-40 rounded-lg font-semibold bg-white text-[#0C75AA] flex justify-center items-center border border-[#40B6F2] hover:bg-[#0C75AA] hover:text-white duration-300">Участвовать</Link>
            </div>
        </div>
    );
}