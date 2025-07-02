export default function TabButton(props) {
    const baseClasses = "h-10 font-semibold px-3.5 py-2.5 justify-center duration-300";
    const hoverClasses = "hover:cursor-pointer hover:border-b-2 hover:border-[#0C75AA] hover:text-[#0C75AA]";
    const activeClasses = "border-b-2 border-[#0C75AA] text-[#0C75AA]";

    return (
        <button className={`${baseClasses} ${hoverClasses} ${props.active ? activeClasses : 'text-[#667085]'}`} onClick={props.onClick}>
            {props.option}
        </button>
    );
}