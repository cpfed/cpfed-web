import {useEffect, useRef, useState} from "react";

export default function CustomDropdown({
                                       initialValue,
                                       onSelectionChange,
                                       options,
                                       placeholder = "Select...",
                                       width = "w-full"
                                   }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredOption, setHoveredOption] = useState(null);
    const [currentSelection, setCurrentSelection] = useState(initialValue || null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setHoveredOption(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sync with external changes
    useEffect(() => {
        setCurrentSelection(initialValue || null);
    }, [initialValue]);

    const handleMainSelect = (option) => {
        if (!option.submenu.length) {
            const selection = { main: option.label, sub: null, mainValue: option.value, subValue: null };
            setCurrentSelection(selection);
            onSelectionChange(selection);
            setIsOpen(false);
            setHoveredOption(null);
        }
    };

    const handleSubSelect = (mainOption, subOption) => {
        const selection = {
            main: mainOption.label,
            sub: subOption.label,
            mainValue: mainOption.value,
            subValue: subOption.value
        };
        setCurrentSelection(selection);
        onSelectionChange(selection);
        setIsOpen(false);
        setHoveredOption(null);
    };

    const getDisplayText = () => {
        if (!currentSelection) return placeholder;
        return currentSelection.sub
            ? `${currentSelection.main} → ${currentSelection.sub}`
            : currentSelection.main;
    };

    return (
        <div className={`relative ${width}`} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-sm text-[#667085] px-3 py-2 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] focus:border-transparent bg-white flex items-center justify-between"
            >
                <span className="truncate">{getDisplayText()}</span>
                <svg
                    className={`w-4 h-4 text-[#667085] transition-transform flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-[#D0D5DD] rounded-md shadow-lg">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="relative"
                            onMouseEnter={() => setHoveredOption(option.submenu.length > 0 ? option.value : null)}
                            onMouseLeave={() => setHoveredOption(null)}
                        >
                            <button
                                onClick={() => handleMainSelect(option)}
                                className={`rounded-md w-full px-3 py-2 text-left text-sm focus:outline-none transition-colors flex items-center justify-between ${
                                    currentSelection?.mainValue === option.value
                                        ? 'bg-[#F9FAFB]'
                                        : 'text-[#667085] hover:bg-[#F9FAFB]'
                                }`}
                            >
                                <span>{option.label}</span>
                                {option.submenu.length > 0 && (
                                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>

                            {option.submenu.length > 0 && hoveredOption === option.value && (
                                <div className="absolute left-full top-0 w-[253px] bg-white border border-[#D0D5DD] rounded-md shadow-lg z-30">
                                    {option.submenu.map(subOption => (
                                        <button
                                            key={subOption.value}
                                            onClick={() => handleSubSelect(option, subOption)}
                                            className={`rounded-md w-full px-3 py-2 text-left text-sm focus:outline-none transition-colors ${
                                                currentSelection?.mainValue === option.value && currentSelection?.subValue === subOption.value
                                                    ? 'bg-[#F9FAFB]'
                                                    : 'text-[#667085] hover:bg-[#F9FAFB]'
                                            }`}
                                        >
                                            {subOption.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}