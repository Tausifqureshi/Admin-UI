
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SelectAllCheckBox from './SelectAllCheckBox';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Table = ({ data, setIsData, originalData, setOriginalData }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const rowsPerPage = 10; // 10 rows per page

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Paginated data (Current page data)
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Log current data for debugging
  console.log('Current Data:', currentData);

  // Handle delete selected rows
  const handleDeleteSelected = () => {
    const updatedData = originalData.filter((row) => !selectedRows.includes(row.id));
    setOriginalData(updatedData);
    setIsData(updatedData);
    setSelectedRows([]);
  };

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the current page
    }
  };

  return (
    <div>
      <SearchBar data={data} setIsData={setIsData} originalData={originalData} />
      <table>
        <thead>
          <tr>
            <th>
              <SelectAllCheckBox data={data} selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(user => (
            <TableRow
              key={user.id}
              data={user}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          ))}
        </tbody>
      </table>
      <button className="delete-selected" onClick={handleDeleteSelected}>
        Delete Selected
      </button>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
