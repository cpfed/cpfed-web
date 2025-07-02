import {ChevronRight} from "lucide-react";
import Link from "next/link";

export default function SeeAllButton(props) {
    const baseClasses = "h-15 px-5 flex justify-between font-semibold rounded-lg items-center text-[#0C75AA] duration-300";
    const hoverClasses = "hover:text-[#066493] hover:bg-[#E2F4FD]";

    return (
        <Link href={props.link} className={`${baseClasses} ${hoverClasses}`}>
            {props.text}
            <ChevronRight />
        </Link>
    )
}