import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({
  data,
  setIsData,
  selectedRows,
  setSelectedRows,
  editingRowId,
  setEditingRowId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(data);
  const isSelected = selectedRows.includes(data.id);
  const isDisabled = editingRowId !== null && editingRowId !== data.id;
  

  const toggleRowSelection = () => {
    setSelectedRows((currentSelectedRows) => {
      if (isSelected) return currentSelectedRows.filter((id) => id !== data.id);
      return [...currentSelectedRows, data.id];
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
              value={userData.name}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="role"
              value={userData.role}
              onChange={handleInputChange}
            />
          </td>
        </>
      ) : (
        <>
          <td>{userData.name}</td>
          <td>{userData.email}</td>
          <td>{userData.role}</td>
        </>
      )}
      <td>
        <RowActions
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setIsData={setIsData}
          data={userData}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
          isDisabled={isDisabled}
        />
      </td>
    </tr>
  );
};

export default TableRow;


















// RowAction








// import React from "react";
// import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

// const RowActions = ({
//   isEditing,
//   setIsData,
//   currentRowId,
//   editingRowId,
//   setEditingRowId,
//   isDisabled,
// }) => {
//   const handleDelete = () => {
//     setIsData((prevData) => prevData.filter((user) => user.id !== currentRowId));
//   };

//   const handleEditToggle = () => {
//     if (isEditing) {
//       setEditingRowId(null);
//     } else {
//       setEditingRowId(currentRowId);
//     }
//   };

//   return (
//     <div>
//       <button className={isEditing ? "save" : "edit"} 
//       onClick={handleEditToggle} disabled={isDisabled}>
//         {isEditing ? <FaSave /> : <FaEdit />}
//       </button>
//       <button className="delete" onClick={handleDelete} disabled={isDisabled}>
//         <FaTrashAlt />
//       </button>
//     </div>
//   );
// };

// export default RowActions;





































/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  background-color: #f4f7fa;
  color: #333;
}

/* App Container */
.App {
  max-width: 900px;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

/* SearchBar Styles */
.search-container {
  position: relative;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 13px 10px; /* Adjusted padding for better spacing */
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #ddd;
  outline: none;
  background-color: #fff;
}

.search-icon {
  position: absolute;
  top: 45%;
  right: -4px;
  transform: translateY(-50%);
  color: #555;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  background-color: transparent;
}

.search-icon:hover {
  color: #007bff;
}

/* Table Styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
/* Table Row Hover Effect */
tbody tr:hover {
  background-color: #e0e0e0; /* Light grey background on hover */
  cursor: pointer; /* Change cursor to pointer */
  transition: background-color 0.3s ease; /* Smooth transition */
}

th,
td {
  padding: 15px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #007bff;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
}

td {
  font-size: 14px;
}

td input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}

/* Row Actions */
button {
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button.save {
  background-color: #007bff;
}

button.save:hover {
  background-color: #0056b3;
}

button.edit {
  background-color: #28a745;
}

button.edit:hover {
  background-color: #218838;
}

button.delete {
  background-color: #dc3545;
}

button.delete:hover {
  background-color: #c82333;
}

/* Disabled Button Styles */
.btn-disabled button:disabled {
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
  border-color: #ccc;
}

.btn-disabled button:disabled:hover {
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
}

/* SelectAllCheckbox styles */
th input[type="checkbox"] {
  width: 22px;
  height: 22px;
  cursor: pointer;
}

th input[type="checkbox"]:disabled {
  background-color: #f4f4f4;
  cursor: not-allowed;
}

/* Pagination Styles */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.delete-selected {
  background-color: #e63946;
  color: white;
  padding: 12px 18px;
  border-radius: 6px;
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
  gap: 10px;
}

.pagination button {
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  transition: background-color 0.3s ease;
}

.pagination button:hover {
  background-color: #0056b3;
}

.pagination button.active {
  background-color: #f1f1f1;
  color: #007bff;
  font-weight: bold;
}

.pagination button:disabled {
  background-color: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
  border-color: #ccc;
}

/* Overlay for full-screen loader */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 211, 211, 0.8); /* Light gray with opacity */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Ensure it appears on top */
}

/* Container for spinner and text */
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Spinner styles */
.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Spin animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Loading text */
p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}


















// RowAction
// import React from "react";
// import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
 
// const RowActions = ({ isEditing,setIsEditing, data, setIsData, currentRowId, editingRowId,setEditingRowId,isDisabled, // Disable actions for non-edit rows
// }) => {

//   // Delete Function. Dono Tara Se delete kar sakte hai jo acah lage 
//   const handleDelete = (id) => {
//     console.log(id)
//     setIsData((prevData) => prevData.filter((user) => user.id !== id));
//   };
  
//   // Delete Function. Dono Tara Se delete kar sakte hai jo acah lage 
//   // const handleDelete = () => {
//   //   setIsData((prevData) => prevData.filter((user) => user.id !== currentRowId));
//   // };
  
//    //  Edit toggle function Delete And Save Icon Show karne ke liye.
//   //  const handleEditToggle = () => setIsEditing(!isEditing); // Toggle karta hai editing mode

//   const handleEditToggle = () => {
//     if (isEditing) {
//       setEditingRowId(null); // Exit editing mode on Save
//     } else {
//       setEditingRowId(currentRowId); // Enter editing mode for this row
//     }
//   };
  

//   return (
//     <div className="btn-disabled">
//       <button className={isEditing ? "save" : "edit"} onClick={handleEditToggle}
//       disabled={isDisabled}
//       >
//         {/* {isEditing ? "Save" : "Edit"} */}
//         {isEditing ? <FaSave /> : <FaEdit />}
//        </button>

//       {/* <button className="delete" onClick={handleDelete} 
//       disabled={isDisabled}
//       > */}
//       <button className="delete" onClick={()=>{handleDelete(data.id)}}
//       disabled={isDisabled}
//       >
//        <FaTrashAlt />
//       </button>
//     </div>
//   );
// };

// export default RowActions;





