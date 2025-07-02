import Link from "next/link";

export default function MoreButtonGray(props) {
    const baseClasses = "px-4 py-2 bg-white font-semibold text-sm text-[#344054] rounded-md hover:bg-[#F9FAFB] hover:text-[#182230] transition-all duration-300";

    return (
        <Link
            href={props.href}
            className={`${baseClasses} ${props.className}`}
        >
            {props.text}
        </Link>
    );
}