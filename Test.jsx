// import React from "react";

// // SelectAllCheckBox component jo Select All logic ko handle karega
// const SelectAllCheckBox = ({ currentData, selectedRows, setSelectedRows }) => {
//   // Function jo "Select All" checkbox ke toggle ko handle karega
//   const handleSelectAll = (e) => {
//     const isChecked = e.target.checked; // Checkbox ka current state (checked ya unchecked)

//     if (isChecked) {
//       // Agar checkbox checked hai, to current page ke rows select kar lo
//       const currentPageIds = currentData.map((row) => row.id); // Current page ke saare row IDs ko collect karte hain
//       setSelectedRows((prevSelected) => [
//         ...new Set([...prevSelected, ...currentPageIds]), // Selected rows mein current page ke rows ko add karte hain
//       ]);
//     } else {
//       // Agar checkbox unchecked hai, to current page ke rows ko deselect kar do
//       const currentPageIds = currentData.map((row) => row.id); // Current page ke row IDs
//       setSelectedRows((prevSelected) =>
//         prevSelected.filter((id) => !currentPageIds.includes(id)) // Current page ke rows ko selected rows se remove karte hain
//       );
//     }
//   };

//   // Yeh check kar raha hai ki current page ke saare rows selected hain ya nahi
//   const isAllSelected = currentData.every((row) => selectedRows.includes(row.id));

//   return (
//     <div>
//       {/* Checkbox jo Select All aur Deselect All manage karega */}
//       <input
//         type="checkbox"
//         onChange={handleSelectAll} // Checkbox toggle hone par handleSelectAll function call hoga
//         checked={isAllSelected} // Agar current page ke saare rows selected hain, to checkbox checked dikhega
//       />
//     </div>
//   );
// };

// export default SelectAllCheckBox;



























import React from "react";
import RowActions from "./RowActions";

const TableRow = ({
  data,
  setIsData,
  selectedRows,
  setSelectedRows,
  editingRowId,
  setEditingRowId,
}) => {
  const isSelected = selectedRows.includes(data.id);
  const isEditing = editingRowId === data.id;
  const isDisabled = editingRowId !== null && !isEditing;

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsData((prevData) =>
      prevData.map((user) =>
        user.id === data.id ? { ...user, [name]: value } : user
      )
    );
  };

  const toggleRowSelection = () => {
    setSelectedRows((prev) =>
      isSelected ? prev.filter((id) => id !== data.id) : [...prev, data.id]
    );
  };

  return (
    <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={toggleRowSelection}
          disabled={isDisabled}
        />
      </td>

      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="role"
              value={data.role}
              onChange={handleInputChange}
            />
          </td>
        </>
      ) : (
        <>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.role}</td>
        </>
      )}
      <td>
        <RowActions
          isEditing={isEditing}
          // setIsEditing={() => {}}
          // setIsEditing={setIsEditing}
          setIsData={setIsData}
          currentRowId={data.id}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
          isDisabled={isDisabled}
        />
      </td>
    </tr>
  );
};

export default TableRow;








// import React from "react";
// import RowActions from "./RowActions";

// const TableRow = ({
//   data,
//   setIsData,
//   selectedRows,
//   setSelectedRows,
//   editingRowId,
//   setEditingRowId,
//   // isDisabled,
// }) => {
//   const isSelected = selectedRows.includes(data.id);
//   const isEditing = editingRowId === data.id;
//   const isDisabled = editingRowId !== null && !isEditing;

//   // Input change handler
//   const handleInputChange = (e) => {
//     if (e.key === "Enter" || e.type === "click") {}
//     const { name, value } = e.target;
//     setIsData((prevData) =>
//       prevData.map((user) =>
//         user.id === data.id ? { ...user, [name]: value } : user
//       )
//     );
//   };

//   const toggleRowSelection = () => {
//     setSelectedRows((prev) =>
//       isSelected ? prev.filter((id) => id !== data.id) : [...prev, data.id]
//     );
//   };

//   return (
//     <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>
//       <td>
//         <input
//           type="checkbox"
//           checked={isSelected}
//           onChange={toggleRowSelection}
//           disabled={isDisabled}
//         />
//       </td>

//       {isEditing ? (
//         <>
//           <td>
//             <input
//               type="text"
//               name="name"
//               value={data.name}
//               onChange={handleInputChange}
//             />
//           </td>
//           <td>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleInputChange}
//             />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="role"
//               value={data.role}
//               onChange={handleInputChange}
//             />
//           </td>
//         </>
//       ) : (
//         <>
//           <td>{data.name}</td>
//           <td>{data.email}</td>
//           <td>{data.role}</td>
//         </>
//       )}
//       <td>
//         <RowActions
//           isEditing={isEditing}
//           // setIsEditing={() => {}}
//           // setIsEditing={setIsEditing}
//           setIsData={setIsData}
//           currentRowId={data.id}
//           editingRowId={editingRowId}
//           setEditingRowId={setEditingRowId}
//           isDisabled={isDisabled}
//         />
//       </td>
//     </tr>
//   );
// };

// export default TableRow;



































































/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Inter";
  font-weight: 300;
  background-color: #f4f4f9;
}

.App {
  /* max-width: 900px; */
  margin: 50px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


/* SearchBar Styles */
.search-container {
  position: relative;
  margin-bottom: 10px;
}

.search-input {
  width: 100%;
  padding: 8px 40px 8px 8px; /* Add padding-right for the icon */
  border-radius: 4px;
  border: 1px solid #ccc;
}

.search-icon {
  position: absolute;
  top: 35%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(4, 4, 6, 0.809);
  cursor: pointer;
  padding: 2px;
  border: none;
  background: transparent;
  font-size: 1.1rem;
}

.search-icon:hover {
  color: #0056b3;
}

/* Table Styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  /* scroll-behavior: ; */
  scrollbar-width: thin;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #007bff;
  color: white;
  text-transform: uppercase;
}
/* TableRow Styles */
td input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}

td input[type="checkbox"]:disabled{
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
  border-color: #ccc;
}

/* RowActions styles */

button {
  padding: 8px 12px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;
}

/* Save Button */
button.save {
  background-color: #007bff;
}

button.save:hover {
  background-color: #0056b3;
}

/* Edit Button */
button.edit {
  background-color: #28a745;
}

button.edit:hover {
  background-color: #218838;
}

/* Delete Button */
button.delete {
  background-color: #dc3545;
}

button.delete:hover {
  background-color: #c82333;
}

.btn-disabled button:disabled {
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
  border-color: #ccc;
}


.btn-disabled button:disabled:hover {
  background-color: #e0e0e0; /* Same as default background */
  color: #ccc; /* Same as default text color */
  border-color: #ccc; /* Same as default border */
  cursor: not-allowed; /* Ensure the cursor stays disabled */
}


/* SelectAllCheckbox styles */
th input[type="checkbox"] {
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

th input[type="checkbox"]:disabled {
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
  border-color: #ccc;
}

/* Pagination Styles */
/* Pagination Container */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px 20px;
}

/* Delete Selected Button */
.delete-selected {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-selected:hover {
  background-color: #d62828;
}

/* Pagination Buttons */
.pagination {
  display: flex;
  gap: 5px;
}

.pagination button {
  /* background-color: #f1f1f1; */
  background-color: #007bff;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
}

/* Hover effect for buttons */
.pagination button:hover {
  background-color: #007bff;
  color: white;
}

/* Active Page Button */
.pagination button.active {
  background-color: #f1f1f1;
  color: #007bff;
  font-weight: bold;
}

/* Disabled Buttons */
.pagination button:disabled {
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
  border-color: #ccc;
}





/*  */

























import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SelectAllCheckBox from './SelectAllCheckBox';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Table = ({ data, setIsData, originalData, setOriginalData }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [editingRowId, setEditingRowId] = useState(null);
  const isDisabled = editingRowId !== null;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="table-container">
      <SearchBar data={data} setIsData={setIsData} originalData={originalData} />
      
      {/* Scrollable table container */}
      <div className="scrollable-table">
      
        <table>
          <thead>
            <tr>
              <th>
                <SelectAllCheckBox
                  data={data}
                  selectedRows={selectedRows}
                  setSelectedRows={setSelectedRows}
                  currentData={currentData}
                  isDisabled={isDisabled}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <TableRow
                key={user.id}
                data={user}
                setIsData={setIsData}
                setOriginalData={setOriginalData}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                editingRowId={editingRowId}
                setEditingRowId={setEditingRowId}
              />
            ))}
          </tbody>
        </table>

      </div>

      <div className="pagination-container">
        <button className="delete-selected">Delete Selected</button>
        <Pagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Table;
