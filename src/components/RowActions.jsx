import React from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

const RowActions = ({ isEditing,setIsEditing, data, setIsData}) => {

  // Delete Function. Dono Tara Se delete kar sakte hai jo acah lage 
  // const handleDelete = (id) => {
  //   console.log(id)
  //   setIsData((prevData) => prevData.filter((user) => user.id !== id));
  // };

  // Delete Function. Dono Tara Se delete kar sakte hai jo acah lage 
  const handleDelete = () => {
    setIsData((prevData) => prevData.filter((user) => user.id !== data.id));
  };

   // Edit toggle function Delete And Save Icon Show karne ke liye.
   const handleEditToggle = () => setIsEditing(!isEditing); // Toggle karta hai editing mode

  return (
    <div>
      <button className={isEditing ? "save" : "edit"} onClick={handleEditToggle}>
        {/* {isEditing ? "Save" : "Edit"} */}
        {isEditing ? <FaSave /> : <FaEdit />}
       </button>

      <button className="delete" onClick={handleDelete}>
      {/* <button className="delete" onClick={()=>{handleDelete(data.id)}}> */}
       <FaTrashAlt />
      </button>
    </div>
  );
};

export default RowActions;










