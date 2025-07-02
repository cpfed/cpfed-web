export default function TabButtonTop(props) {
    const baseClasses = "h-10 font-semibold justify-center duration-300 border-t-4";
    const hoverClasses = "hover:cursor-pointer hover:border-[#0C75AA] hover:text-[#0C75AA]";
    const activeClasses = "border-[#0C75AA] text-[#0C75AA]";

    return (
        <button className={`${baseClasses} ${hoverClasses} ${props.additonalClasses} ${props.active ? activeClasses : 'border-[#E4E7EC] text-[#667085]'}`} onClick={props.onClick}>
            {props.option}
        </button>
    );
}