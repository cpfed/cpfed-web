'use client';

import {ChevronDown, ChevronLeft, ChevronRight, Edit2, Trash2} from "lucide-react";
import {useState} from "react";

export default function EditContestsTable() {
    const [isAllChecked, setIsAllChecked] = useState(false);

    const [contests, setContests] = useState([
        { id: 1, name: 'Documentolog', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 2, name: 'AI olymp', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 3, name: 'Contest #3', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 4, name: 'Contest #4', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 5, name: 'Contest #5', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 6, name: 'Contest #6', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 7, name: 'Contest #7', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 8, name: 'Contest #8', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 9, name: 'Contest #9', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 10, name: 'Contest #10', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 11, name: 'Contest #11', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 12, name: 'Contest #12', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
        { id: 13, name: 'Contest #13', registration_start: '11.11.2023', registration_end: '11.11.2023', created: '11.11.2023' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showPageDropdown, setShowPageDropdown] = useState(false);
    const [showItemsDropdown, setShowItemsDropdown] = useState(false);

    const totalPages = Math.ceil(contests.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, contests.length);
    const currentContests = contests.slice(startIndex, endIndex);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const setPage = (page) => {
        setCurrentPage(page);
        setShowPageDropdown(false);
    };

    const setItems = (items) => {
        setItemsPerPage(items);
        setCurrentPage(1);
        setShowItemsDropdown(false);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-700 border rounded-lg border-[#E4E7EC]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-[#E4E7EC]">
                <tr>
                    <th className="px-3 py-3 border-[#E4E7EC]">
                        <input
                            type="checkbox"
                            id="basic-checkbox"
                            checked={isAllChecked}
                            onChange={(e) => setIsAllChecked(!isAllChecked)}
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-[#D0D5DD] rounded-md focus:ring-blue-500"
                        />
                    </th>
                    <th className="px-6 py-3 border-[#E4E7EC]">Наименование</th>
                    <th className="px-6 py-3 border-[#E4E7EC]">Дата начало регистрации</th>
                    <th className="px-6 py-3 border-[#E4E7EC]">Дата завершение регистрации</th>
                    <th className="px-6 py-3 border-[#E4E7EC]">Дата добавления</th>
                    <th className="px-6 py-3 border-[#E4E7EC]"></th>
                </tr>
                </thead>
                <tbody>
                {currentContests.map((contest, index) => (
                    <tr key={contest.id}
                        className={index % 2 === 0 ? "bg-white border-b border-[#E4E7EC]" : "bg-gray-50 border-b border-[#E4E7EC]"}>
                        <td className="px-3 py-4">
                            <input
                                type="checkbox"
                                id="basic-checkbox"
                                checked={isAllChecked}
                                onChange={(e) => setIsAllChecked(!isAllChecked)}
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-[#D0D5DD] rounded-md focus:ring-blue-500"
                            />
                        </td>
                        <td className="px-6 py-4">{contest.name}</td>
                        <td className="px-6 py-4">{contest.registration_start}</td>
                        <td className="px-6 py-4">{contest.registration_end}</td>
                        <td className="px-6 py-4">{contest.created}</td>
                        <td className="px-6 py-4 flex gap-1">
                            <button
                                className="btn-primary p-2 border rounded-md border-[#D0D5DD] hover:cursor-pointer hover:">
                                <Edit2/>
                            </button>
                            <button className="p-2 border rounded-md border-[#D0D5DD] hover:cursor-pointer">
                                <Trash2/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="w-[528px] bg-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-700">
                    <div className="mr-4 flex items-center">
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowPageDropdown(!showPageDropdown)}
                                className="inline-flex items-center px-2 py-1 border border-[#E4E7EC] rounded text-xs bg-white hover:bg-gray-50"
                            >
                                {currentPage}
                                <ChevronDown size={14} className="ml-1"/>
                            </button>

                            {showPageDropdown && (
                                <div
                                    className="absolute left-0 mt-1 w-16 bg-white border border-[#E4E7EC] rounded shadow-lg z-50 max-h-40 overflow-y-auto">
                                    {pageNumbers.map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setPage(page)}
                                            className={`block w-full text-left px-3 py-1 text-xs hover:bg-gray-100 ${page === currentPage ? 'bg-gray-100' : ''}`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <span className="mx-1">из</span>
                        <span>{totalPages}</span>
                    </div>

                    <div className="mr-4">
                        <span>Результатов: {contests.length}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="text-sm text-gray-700">
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowItemsDropdown(!showItemsDropdown)}
                                className="inline-flex items-center px-2 py-1 border border-[#E4E7EC] rounded text-xs bg-white hover:bg-gray-50"
                            >
                                {itemsPerPage}
                                <ChevronDown size={14} className="ml-1"/>
                            </button>

                            {showItemsDropdown && (
                                <div
                                    className="absolute left-0 mt-1 w-16 bg-white border border-[#E4E7EC] rounded shadow-lg z-50">
                                    {[10, 20, 50].map(num => (
                                        <button
                                            key={num}
                                            onClick={() => setItems(num)}
                                            className={`block w-full text-left px-3 py-1 text-xs hover:bg-gray-100 ${num === itemsPerPage ? 'bg-gray-100' : ''}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`p-1.5 rounded-md ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        <ChevronLeft size={18}/>
                    </button>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-1.5 rounded-md ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        <ChevronRight size={18}/>
                    </button>
                </div>
            </div>
        </div>
    );
}