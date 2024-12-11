import React from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
 
const RowActions = ({ isEditing,setIsEditing, data, setIsData
  , isAnyRowEditing,
  setEditingRowId,
  currentRowId,
}) => {

  // Delete Function. Dono Tara Se delete kar sakte hai jo acah lage 
  // const handleDelete = (id) => {
  //   console.log(id)
  //   setIsData((prevData) => prevData.filter((user) => user.id !== id));
  // };
  
  // Delete Function. Dono Tara Se delete kar sakte hai jo acah lage 
  const handleDelete = () => {
    setIsData((prevData) => prevData.filter((user) => user.id !== data.id));
  };
 
   //  Edit toggle function Delete And Save Icon Show karne ke liye.
  //  const handleEditToggle = () => setIsEditing(!isEditing); // Toggle karta hai editing mode

  const handleEditToggle = () => {
    if (isEditing) {
      setEditing(null); // Stop editing mode
    } else {
      setEditingRowId(currentRowId); // Set this row as editing
    }
  };

  return (
    <div>
      <button className={isEditing ? "save" : "edit"} onClick={handleEditToggle}
       disabled={isAnyRowEditing && !isEditing} // Disable if any row is editing and it's not this row      
      >
        {/* {isEditing ? "Save" : "Edit"} */}
        {isEditing ? <FaSave /> : <FaEdit />}
       </button>

      <button className="delete" onClick={handleDelete} 
       disabled={isAnyRowEditing && !isEditing} // Disable if any row is editing and it's not this row
      >
      {/* <button className="delete" onClick={()=>{handleDelete(data.id)}}> */}
       <FaTrashAlt />
      </button>
    </div>
  );
};

export default RowActions;










