'use client';

export default function LoginButton(props) {
    const baseClasses = "rounded-lg font-semibold flex justify-center text-white items-center bg-[#0E8AC8] px-5.5 hover:cursor-pointer hover:bg-[#0C75AA] duration-300";
    const sizeClasses = `${props.width || "w-45"} ${props.height || "h-15"}`;
    const fontClasses = `${props.font || "text-md"}`;

    return (
        <button
            className={`${baseClasses} ${sizeClasses} ${fontClasses}`}
            onClick={props.onClick}>
            {props.text}
        </button>
    );
}