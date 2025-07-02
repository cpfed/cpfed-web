'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, Filter, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import {MoreButton} from "@/components/ui";

const UsersTable = () => {
    const [allUsers, setAllUsers] = useState([
        { id: 1, username: 'username', rating: 2000, city: 'Актобе' },
        { id: 2, username: 'johndoe', rating: 1850, city: 'Алматы' },
        { id: 3, username: 'sarahk', rating: 2150, city: 'Астана' },
        { id: 4, username: 'alex92', rating: 1920, city: 'Шымкент' },
        { id: 5, username: 'elena_m', rating: 2080, city: 'Актобе' },
        { id: 6, username: 'mark_j', rating: 1950, city: 'Алматы' },
        { id: 7, username: 'anna123', rating: 2200, city: 'Астана' },
        { id: 8, username: 'davidw', rating: 1890, city: 'Шымкент' },
        { id: 9, username: 'samira', rating: 2100, city: 'Актобе' },
        { id: 10, username: 'peter44', rating: 1975, city: 'Алматы' },
        { id: 11, username: 'lisa_r', rating: 2050, city: 'Астана' },
        { id: 12, username: 'mike87', rating: 1900, city: 'Шымкент' },
    ]);

    const [sortDirection, setSortDirection] = useState('desc');
    const [showCityFilter, setShowCityFilter] = useState(false);
    const [cityFilter, setCityFilter] = useState('');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showPageDropdown, setShowPageDropdown] = useState(false);
    const [showItemsDropdown, setShowItemsDropdown] = useState(false);

    // Initial sort on component mount - descending by rating
    useEffect(() => {
        setAllUsers([...allUsers].sort((a, b) => b.rating - a.rating));
    }, []);

    const handleMoreClick = (userId) => {
        console.log(`More details requested for user ID: ${userId}`);
        // Implement your action logic here
    };

    const handleSortByRating = () => {
        // Toggle between ascending and descending
        const newDirection = sortDirection === 'desc' ? 'asc' : 'desc';
        setSortDirection(newDirection);

        if (newDirection === 'asc') {
            setAllUsers([...allUsers].sort((a, b) => a.rating - b.rating));
        } else {
            setAllUsers([...allUsers].sort((a, b) => b.rating - a.rating));
        }
    };

    const toggleCityFilter = () => {
        setShowCityFilter(!showCityFilter);
        if (showCityFilter) {
            setCityFilter('');
        }
    };

    const handleCityFilterChange = (e) => {
        setCityFilter(e.target.value);
        setCurrentPage(1); // Reset to first page when filtering
    };

    // Apply filters
    const filteredUsers = cityFilter
        ? allUsers.filter(user => user.city.toLowerCase().includes(cityFilter.toLowerCase()))
        : allUsers;

    // Calculate pagination
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredUsers.length);
    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    // Pagination controls
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
        setCurrentPage(1); // Reset to first page when changing items per page
        setShowItemsDropdown(false);
    };

    // Generate page numbers for dropdown
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-full text-sm text-[#344054] overflow-visible shadow-md rounded-lg border border-[#E4E7EC]">
            <table className="w-full text-left rounded-t-lg table-fixed">
                <thead className="text-xs font-medium text-[#475467] bg-[#F9FAFB] border-b border-[#E4E7EC]">
                <tr>
                    <th className="px-3 py-3 w-12 text-center rounded-tl-lg border-r border-[#E4E7EC]">№</th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">Username</th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">
                        <div className="flex items-center space-x-1">
                            <span>Рейтинг</span>
                            <button
                                onClick={handleSortByRating}
                                className="p-1 rounded hover:bg-gray-200"
                            >
                                <ArrowUpDown size={16} />
                            </button>
                        </div>
                    </th>
                    <th className="px-6 py-3 border-r border-[#E4E7EC]">
                        <div className="flex items-center space-x-1">
                            <span>Город</span>
                            <button
                                onClick={toggleCityFilter}
                                className={`p-1 rounded hover:bg-gray-200 ${showCityFilter ? 'text-[#0E8AC8]' : ''}`}
                            >
                                <Filter size={16} />
                            </button>
                        </div>
                        {showCityFilter && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={cityFilter}
                                    onChange={handleCityFilterChange}
                                    placeholder="Filter city..."
                                    className="p-1 border rounded w-full"
                                />
                            </div>
                        )}
                    </th>
                    <th className="w-[140px] rounded-tr-lg px-6 py-3">Действия</th>
                </tr>
                </thead>
                <tbody>
                {currentUsers.map((user, index) => (
                    <tr key={user.id} className={index % 2 === 0 ? "bg-white border-b border-[#E4E7EC]" : " bg-[#F9FAFB] border-b border-[#E4E7EC]"}>
                        <td className="px-3 py-4 text-center">{startIndex + index + 1}</td>
                        <td className="px-6 py-4">
                            <Link href="/user" className="text-red-600">{user.username}</Link>
                        </td>
                        <td className="px-6 py-4">{user.rating}</td>
                        <td className="px-6 py-4">{user.city}</td>
                        <td className="px-4 py-3">
                            <MoreButton link="/user" width="w-27" height="h-9" font="text-sm"/>
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
                        <span>Результатов: {filteredUsers.length}</span>
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
};

export default UsersTable;