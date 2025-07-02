import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MoreButton(props) {
    const baseClasses = "rounded-lg font-semibold bg-white text-[#0C75AA] flex items-center border border-[#40B6F2] hover:bg-[#E2F4FD] hover:text-[#066493] px-5.5 duration-300";
    const sizeClasses = `${props.width || "w-45"} ${props.height || "h-15"}`;
    const fontClasses = `${props.font || 'text-lg'}`;
    const shadowClasses = ""; //"shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_-2px_0px_0px_rgba(16,24,40,0.05)_inset,0px_0px_0px_1px_rgba(16,24,40,0.18)_inset]";

    return props.icon ? (
        <Link className={`${baseClasses} ${sizeClasses} ${fontClasses} w-fit gap-2.5 justify-between`} href={props.link}>
            <span>Подробнее</span>
            <ChevronRight/>
        </Link>
    ) : (
        <Link className={`${shadowClasses} ${baseClasses} ${sizeClasses} ${fontClasses} bg-white justify-center`} href={props.link}>
            {props.text || "Подробнее"}
        </Link>
    );
}