import Link from "next/link";

export default function Button(props) {
    const baseClasses = "rounded-lg font-semibold flex justify-center text-white items-center bg-[#0E8AC8] leading-none hover:bg-[#0C75AA] duration-300";
    const sizeClasses = `${props.width || "w-45"} ${props.height || "h-15"}`;
    const fontClasses = `${props.font || 'text-lg'}`;
    const shadowClasses = ""; //"shadow-[0px_-2px_0px_0px_#1018280D_inset,0px_0px_0px_1px_#1018282E_inset]";

    return (
        <Link className={`${shadowClasses} ${baseClasses} ${sizeClasses} ${fontClasses}`} href={props.link}>
            {props.text}
        </Link>
    );
}