import { useState } from 'react';

const Pagination = ({ pagination, onPageChange }) => {
    const { page, totalPages, totalItems, limit } = pagination;

    const handlePrevious = () => {
        if (page > 1) {
            onPageChange(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            onPageChange(page + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{(page - 1) * limit + 1}-{Math.min(page * limit, totalItems)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalItems}</span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <button onClick={handlePrevious} disabled={page === 1} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </button>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                    <li key={index + 1}>
                        <button onClick={() => handlePageClick(index + 1)} className={`flex items-center justify-center px-3 h-8 leading-tight border ${page === index + 1 ? 'text-blue-600 bg-blue-50 border-gray-300' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                            {index + 1}
                        </button>
                    </li>
                ))}

                <li>
                    <button onClick={handleNext} disabled={page === totalPages} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
