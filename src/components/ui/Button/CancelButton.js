export default function CancelButton(props) {
    return (
        <button
            onClick={props.onClick}
            className="h-11 px-4 py-2 font-semibold text-base leading-none text-[#344054] bg-white border border-[#D0D5DD] rounded-md hover:cursor-pointer hover:bg-[#F9FAFB] duration-300"
        >
            Отмена
        </button>
    );
}