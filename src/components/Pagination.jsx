import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the page number
    }
  };

  return (
    <div className="pagination">
      <button
        className="first-page"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className="previous-page"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="next-page"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        className="last-page"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;


























// import React from 'react';

// const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
//   // Handle page change logic
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page); // Update the current page
//     }
//   };

//   return (
//     <div className="pagination">
//       <button
//         className="first-page"
//         onClick={() => handlePageChange(1)}
//         disabled={currentPage === 1}
//       >
//         First
//       </button>
//       <button
//         className="previous-page"
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Prev
//       </button>
//       <span>{`Page ${currentPage} of ${totalPages}`}</span>
//       <button
//         className="next-page"
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//       <button
//         className="last-page"
//         onClick={() => handlePageChange(totalPages)}
//         disabled={currentPage === totalPages}
//       >
//         Last
//       </button>
//     </div>
//   );
// };

// export default Pagination;
