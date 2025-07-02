export default function BackButton(props) {
    const baseClasses = "rounded-lg font-semibold flex justify-center items-center text-[#0E8AC8] hover:text-[#066493] hover:cursor-pointer px-5.5 duration-300";
    const sizeClasses = `${props.width || "w-full"} ${props.height || "h-15"}`;
    const fontClasses = `${props.font || "text-md"}`;

    return (
        <button className={`${baseClasses} ${sizeClasses} ${fontClasses}`} onClick={props.onClick}>
            {props.text}
        </button>
    );
}