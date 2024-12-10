import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectAllCheckBox from './SelectAllCheckBox'
import TableRow from './TableRow'
import Pagination from './Pagination'

const Table = ({ data, setIsData, originalData, setOriginalData }) => {
  const [selectedRows, setSelectedRows] = useState([]); // Select ki gayi rows ka state
  const [currentPage, setCurrentPage] = useState(1); // Current page ka state
  const rowsPerPage = 10; // Har page par 10 rows dikhani hain

  // Total pages calculate karte hain
  const totalPages = Math.ceil(data.length / rowsPerPage);
  console.log(totalPages, "totalPages");

  // Current page ka data filter karte hain
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  console.log('Current Data:', currentData); // Debug ke liye current data print karte hain

  // Function jo selected rows ko delete karega
  const handleDeleteSelected = () => {
    // Step 1: Original data ko filter karke sirf un rows ko rakhte hain jo selected nahi hain
    const updatedData = originalData.filter((row) => !selectedRows.includes(row.id));

    // Step 2: Original aur filtered data ko update karte hain
    setOriginalData(updatedData);
    setIsData(updatedData);

    // Step 3: Selected rows ko reset karte hain
    setSelectedRows([]);
  };

  // Page change handle karne ka function
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Current page update karte hain
    }
  };

  return (
    <div>
      {/* SearchBar component */}
      <SearchBar data={data} setIsData={setIsData} originalData={originalData} />

      <table>
        <thead>
          <tr>
            {/* SelectAllCheckBox component */}
            <th>
              <SelectAllCheckBox 
                data={data}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* TableRow component */}
          {currentData.map(user => (
            <TableRow 
              key={user.id}
              data={user}
              setIsData={setIsData}
              setOriginalData={setOriginalData}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          ))}
        </tbody>
      </table>

      <div className='pagination-container'>
        {/* Delete Selected button */}
        <div className='delete-button'>
          <button 
            className="delete-selected" 
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </button>
        </div>

        {/* Pagination component */}
        <Pagination 
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  )
}

export default Table
