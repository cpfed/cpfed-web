export default function ChoiceButton(props) {
    const baseClasses = "rounded-lg h-10 font-semibold px-3.5 py-2.5 justify-center duration-300";
    const hoverClasses = "hover:cursor-pointer hover:bg-[#E2F4FD] hover:text-[#0C75AA]";
    const activeClasses = "bg-[#E2F4FD] text-[#0C75AA]";

    return (
        <button className={`${baseClasses} ${hoverClasses} ${props.active ? activeClasses : 'text-[#667085]'}`} onClick={props.onClick}>
            {props.option}
        </button>
    );
}