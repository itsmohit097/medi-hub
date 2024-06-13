import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 bg-gray-100 text-gray-700 rounded-l-md hover:bg-gray-200"
      >
        Previous
      </button>
      <span className="px-4 py-2 border-t border-b border-gray-300 bg-gray-100 text-gray-700">
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 bg-gray-100 text-gray-700 rounded-r-md hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
