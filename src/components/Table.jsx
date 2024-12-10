import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectAllCheckBox from './SelectAllCheckBox'
import TableRow from './TableRow'
import Pagination from './Pagination'

const Table = ({ data , setIsData, originalData,  setOriginalData}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const rowsPerPage = 10; // 10 rows per page


  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);
  console.log(totalPages, "totalPages");

  // Paginated data (Current page data)
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Log current data for debugging
  console.log('Current Data:', currentData);

    // Function jo all selected rows ko delete karne ka kaam karega
    const handleDeleteSelected = () => {
  // Step 1: Filter the original data to exclude selected rows
  const updatedData = originalData.filter((row) => {
    // Check karte hain ki row ID selectedRows mein included hai ya nahi
    return !selectedRows.includes(row.id); // Agar row selected hai, toh usko hata dete hain
  });

  // Step 2: Update original data with the filtered data
  setOriginalData(updatedData); // Original data ko update karte hain

  // Step 3: Update the filtered or displayed data
  setIsData(updatedData); // Filtered data ko bhi updatedData ke saath sync karte hain

  // Step 4: Reset the selected rows
  setSelectedRows([]); // Saare selected rows ko reset kar dete hain (empty karte hain)

  // Ab table ka data updated hai aur koi row selected nahi hai
    };


     // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the current page
    }
  };

  return (
    <div>
    <SearchBar data={data} setIsData={setIsData} originalData={originalData}/>
    <table>
      <thead>
        <tr>

         {/* SelectAllCheckBox component */}
        <th> 
        <SelectAllCheckBox data={data}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows} />
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
            <TableRow key={user.id} 
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
    <div className='delete-button'>
    <button className="delete-selected" onClick={handleDeleteSelected}>Delete Selected</button>
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
