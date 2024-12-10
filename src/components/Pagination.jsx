import React from 'react';

const Pagination = ({ currentPage, totalPages,  handlePageChange }) => {
  
  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    
    <div className="pagination">
      {/* First Page Button */}
      <button 
        className="first-page"
        onClick={() =>  handlePageChange(1)} 
        disabled={currentPage === 1}
      >
        First
      </button>
      
      {/* Previous Page Button */}
      <button 
        className="previous-page"
        onClick={() =>  handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Prev
      </button>
      
      {/* Numeric Page Buttons */}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() =>  handlePageChange(pageNumber)}
          className={currentPage === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}
      
      {/* Next Page Button */}
      <button 
        className="next-page"
        onClick={() =>  handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      
      {/* Last Page Button */}
      <button 
        className="last-page"
        onClick={() =>  handlePageChange(totalPages)} 
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>

  );


};
       
export default Pagination;

