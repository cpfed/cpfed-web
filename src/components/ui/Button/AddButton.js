import {Plus} from "lucide-react";

export default function AddButton(props) {
    const baseClasses = "rounded-lg font-semibold flex gap-1.5 justify-center items-center text-[#0E8AC8] px-5.5 duration-300";
    const hoverClasses = "hover:text-[#066493] hover:cursor-pointer";
    const sizeClasses = `${props.width || "w-full"} ${props.height || "h-15"}`;
    const fontClasses = `${props.font || "text-md"}`;

    return (
        <button className={`${baseClasses} ${hoverClasses} ${sizeClasses} ${fontClasses}`} onClick={props.onClick}>
            <Plus />

            <span>{props.text}</span>
        </button>
    );
}