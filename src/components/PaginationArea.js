import {ChevronDown, ChevronLeft, ChevronRight} from "lucide-react";

export default function PaginationArea(props) {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border rounded-b-lg border-[#E4E7EC]">
            <div className="flex items-center text-sm text-gray-700">
                <div className="mr-4 flex items-center">
                    <span className="mr-1">Page</span>
                    <div className="relative inline-block">
                        <button
                            onClick={() => setShowPageDropdown(!showPageDropdown)}
                            className="inline-flex items-center px-2 py-1 border border-[#E4E7EC] rounded text-xs bg-white hover:bg-gray-50"
                        >
                            {currentPage}
                            <ChevronDown size={14} className="ml-1" />
                        </button>

                        {showPageDropdown && (
                            <div className="absolute left-0 mt-1 w-16 bg-white border border-[#E4E7EC] rounded shadow-lg z-50 max-h-40 overflow-y-auto">
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
                    <span>Результатов: {filteredContests.length}</span>
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
                            <ChevronDown size={14} className="ml-1" />
                        </button>

                        {showItemsDropdown && (
                            <div className="absolute left-0 mt-1 w-16 bg-white border border-[#E4E7EC] rounded shadow-lg z-50">
                                {[50, 100, 200].map(num => (
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
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-1.5 rounded-md ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}