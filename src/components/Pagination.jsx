import React from 'react';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa'; // Icons import kar rahe hain

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  // Total pages ka ek array banate hain
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  return (
    <div className="pagination">
      {/* First Page Button */}
      <button
        className="first-page"
        onClick={() => handlePageChange(1)} // Pehle page par jane ke liye
        disabled={currentPage === 1} // Agar current page 1 hai to disable karein
      >
        <FaAngleDoubleLeft /> {/* First Page Icon */}
      </button>

      {/* Previous Page Button */}
      <button
        className="previous-page"
        onClick={() => handlePageChange(currentPage - 1)} // Previous page par jane ke liye
        disabled={currentPage === 1} // Agar current page 1 hai to disable karein
      >
        <FaAngleLeft /> {/* Previous Page Icon */}
      </button>

      {/* Numeric Page Buttons */}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber} // Unique key har button ke liye
          onClick={() => handlePageChange(pageNumber)} // Specific page par jane ke liye
          className={currentPage === pageNumber ? 'active' : ''} // Current page active class dega
        >
          {pageNumber} {/* Page number dikhana */}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        className="next-page"
        onClick={() => handlePageChange(currentPage + 1)} // Next page par jane ke liye
        disabled={currentPage === totalPages} // Agar current page last page hai to disable karein
      >
        <FaAngleRight /> {/* Next Page Icon */}
      </button>

      {/* Last Page Button */}
      <button
        className="last-page"
        onClick={() => handlePageChange(totalPages)} // Last page par jane ke liye
        disabled={currentPage === totalPages} // Agar current page last page hai to disable karein
      >
        <FaAngleDoubleRight /> {/* Last Page Icon */}
      </button>
    </div>
  );
};

export default Pagination;
