'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchInput = ({ placeholder = "Поиск...", onSearch = () => {} }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="relative w-full max-w-md">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-[#667085] text-md" />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:border-[#0E8AC8] outline-none"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default SearchInput;