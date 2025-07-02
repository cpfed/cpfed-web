import Link from "next/link";

export default function RegisterButton(props) {
    const baseClasses = "rounded-lg font-semibold flex justify-center items-center text-[#0E8AC8] hover:text-[#066493] px-5.5 duration-300";
    const sizeClasses = `${props.width || "w-full"} ${props.height || "h-15"}`;
    const fontClasses = `${props.font || "text-md"}`;

    return (
        <Link className={`${baseClasses} ${sizeClasses} ${fontClasses}`} href={props.link}>
            {props.text}
        </Link>
    );
}