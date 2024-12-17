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





