import React, { useState } from 'react'
// import RowActions from './RowActions'
import SearchBar from './SearchBar'
import SelectAllCheckBox from './SelectAllCheckBox'
import TableRow from './TableRow'

const Table = ({ data , setIsData, originalData,  setOriginalData}) => {
  const [selectedRows, setSelectedRows] = useState([]);



  // Function jo ek row ko select ya deselect karti hai
  const toggleRowSelection = (rowId) => {
  setSelectedRows((currentSelectedRows) => {
    // Check karte hain ki row pehle se selected hai ya nahi
    const isAlreadySelected = currentSelectedRows.includes(rowId);

    if (isAlreadySelected) {
      // Agar row selected hai, toh row ID ko selection se hata dete hain
      return currentSelectedRows.filter((id) => id !== rowId);
    } else {
      // Agar row selected nahi hai, toh row ID ko selection mein add karte hain
      return [...currentSelectedRows, rowId];
    }
  });
  };


  // Function jo selected rows ko delete karne ka kaam karega
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

  return (
    <div>
    <SearchBar data={data} setIsData={setIsData} originalData={originalData}/>
    <table>
      <thead>
        <tr>

        <th> 
         {/* SelectAllCheckBox component */}
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
          {data.map(user => (
            
            <TableRow key={user.id} 
              data={user}
              isSelected={selectedRows.includes(user.id)}
              onRowSelect={toggleRowSelection}/>
            
          ))}
        </tbody>

    </table>
    {/* <Pagination users={users} setUsers={setUsers} /> */}
    <button className="delete-selected" onClick={handleDeleteSelected}>Delete Selected</button>
    </div>
  )
}

export default Table
