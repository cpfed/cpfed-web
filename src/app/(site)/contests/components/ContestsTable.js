'use client';

import {useEffect, useState} from "react";
import {ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Filter} from "lucide-react";
import Link from "next/link";
import {MoreButton, Button} from "@/components/ui";
import { format, parseISO } from 'date-fns';

export default function ContestsTable({ contests }) {
    const [allContests, setAllContests] = useState(contests);

    const [sortDirection, setSortDirection] = useState('desc');
    const [showAuthorFilter, setShowAuthorFilter] = useState(false);
    const [authorFilter, setAuthorFilter] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showPageDropdown, setShowPageDropdown] = useState(false);
    const [showItemsDropdown, setShowItemsDropdown] = useState(false);

    // Initial sort on component mount - descending by rating
    useEffect(() => {
        setAllContests([...allContests].sort((a, b) => b.rating - a.rating));
    }, []);

    const handleMoreClick = (contestId) => {
        console.log(`More details requested for contest ID: ${contestId}`);
    };

    const handleSortByRating = () => {
        const newDirection = sortDirection === 'desc' ? 'asc' : 'desc';
        setSortDirection(newDirection);

        if (newDirection === 'asc') {
            setAllContests([...allContests].sort((a, b) => a.rating - b.rating));
        } else {
            setAllContests([...allContests].sort((a, b) => b.rating - a.rating));
        }
    };

    const toggleAuthorFilter = () => {
        setShowAuthorFilter(!showAuthorFilter);
        if (showAuthorFilter) {
            setAuthorFilter('');
        }
    };

    const handleAuthorFilterChange = (e) => {
        setAuthorFilter(e.target.value);
        setCurrentPage(1);
    };

    const filteredContests = authorFilter
        ? allContests.filter(contest => contest.author.toLowerCase().includes(authorFilter.toLowerCase()))
        : allContests;

    const totalPages = Math.ceil(filteredContests.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredContests.length);
    const currentContests = filteredContests.slice(startIndex, endIndex);

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
        <div className="w-full text-sm text-[#344054] overflow-visible shadow-md rounded-lg border border-[#E4E7EC]">
            <table className="w-full text-left rounded-t-lg table-fixed">
                <thead className="text-xs font-medium text-[#475467] bg-gray-50 border-b border-[#E4E7EC]">
                <tr>
                    <th className="px-3 py-3 w-12 text-center rounded-tl-lg border-r border-[#E4E7EC]">№</th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">Наименование соревнований</th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">Время начала</th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">
                        <div className="flex items-center space-x-1">
                            <span>Авторы</span>
                            <button
                                onClick={toggleAuthorFilter}
                                className={`p-1 rounded hover:bg-gray-200 ${showAuthorFilter ? 'text-[#0E8AC8]' : ''}`}
                            >
                                <Filter size={16} />
                            </button>
                        </div>
                        {showAuthorFilter && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={authorFilter}
                                    onChange={handleAuthorFilterChange}
                                    placeholder="Filter author..."
                                    className="p-1 border rounded w-full"
                                />
                            </div>
                        )}
                    </th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">Длительность</th>
                    <th className="w-[320px] px-6 py-3 rounded-tr-lg">Действия</th>
                </tr>
                </thead>
                <tbody>
                {currentContests.map((contest, index) => (
                    <tr key={contest.id} className={index % 2 === 0 ? "bg-white border-b border-[#E4E7EC]" : "bg-gray-50 border-b border-[#E4E7EC]"}>
                        <td className="px-3 py-4 text-center">{startIndex + index + 1}</td>
                        <td className="px-6 py-4">
                            <Link href={`/src/app/(site)/contests/${contest.id}`}>{contest.name}</Link>
                        </td>
                        <td className="px-6 py-4">{format(parseISO(contest.date), 'dd/MM/yyyy HH:mm')}</td>
                        <td className="px-6 py-4">Tima</td>
                        <td className="px-6 py-4">5:00:00</td>
                        <td className="px-4 py-3 flex space-x-1">
                            { contest.is_over ? <Button link="/virtual" text="Виртуальное участие" height="h-9" width="w-45" font="text-sm"/> : <Button link="/register" text="Зарегистрироваться" height="h-9" width="w-45" font="text-sm"/> }

                            <MoreButton link={`/contests/${contest.id}`} width="w-27" height="h-9" font="text-sm" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Table Footer with Pagination */}
            <div className="bg-white px-4 py-3 flex items-center justify-between rounded-b-lg">
                <div className="flex items-center text-gray-700">
                    <div className="mr-4 flex items-center">
                        <div className="text-[#667085] relative inline-block">
                            <button
                                onClick={() => setShowPageDropdown(!showPageDropdown)}
                                className="w-20 inline-flex justify-between px-3.5 py-1.5 border border-[#D0D5DD] rounded-md bg-white hover:bg-[#F9FAFB] hover:cursor-pointer duration-300"
                            >
                                {currentPage}
                                <ChevronDown size={20} />
                            </button>

                            {showPageDropdown && (
                                <div className="w-20 absolute left-0 mt-1 bg-white border border-[#D0D5DD] rounded-md shadow-lg z-50 max-h-40 overflow-y-auto">
                                    {pageNumbers.map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setPage(page)}
                                            className={`block w-full text-left px-3 py-1 hover:bg-gray-100 ${page === currentPage ? 'bg-gray-[#F9FAFB]' : ''}`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <span className="ml-4 mx-1">из</span>
                        <span>{totalPages}</span>
                    </div>

                    <div className="ml-10">
                        <span>Результатов: {filteredContests.length}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="font-medium">
                        <div className="text-[#667085] relative inline-block">
                            <button
                                onClick={() => setShowItemsDropdown(!showItemsDropdown)}
                                className="w-20 inline-flex justify-between px-3.5 py-1.5 border border-[#D0D5DD] rounded-md bg-white hover:bg-[#F9FAFB] hover:cursor-pointer duration-300"
                            >
                                {itemsPerPage}
                                <ChevronDown size={20} className="ml-1" />
                            </button>

                            {showItemsDropdown && (
                                <div className="w-20 absolute left-0 mt-1 bg-white border border-[#D0D5DD] rounded-md shadow-lg z-50">
                                    {[10, 20, 50].map(num => (
                                        <button
                                            key={num}
                                            onClick={() => setItems(num)}
                                            className={`block w-full text-left px-3 py-1 hover:bg-gray-100 ${num === itemsPerPage ? 'bg-[#F9FAFB]' : ''}`}
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
                        className={`p-1.5 rounded-md border border-[#D0D5DD] ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#344054] hover:bg-[#F9FAFB] hover:cursor-pointer'} duration-300`}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-1.5 rounded-md border border-[#D0D5DD] ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#344054] hover:bg-[#F9FAFB] hover:cursor-pointer'} duration-300`}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}