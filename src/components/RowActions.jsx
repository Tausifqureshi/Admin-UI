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












import React from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

const RowActions = ({
  isEditing,
  setIsEditing,
  setIsData,
  data,
  editingRowId,
  setEditingRowId,
  isDisabled,
}) => {
  const handleDelete = () => {
    setIsData((prevData) => prevData.filter((user) => user.id !== data.id));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setEditingRowId(null);
    } else {
      setEditingRowId(data.id);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="btn-disabled">
      <button  className={isEditing ? "save" : "edit"} onClick={handleEditToggle} disabled={isDisabled}>
        {isEditing ? <FaSave /> : <FaEdit />}
      </button>
      <button  className="delete" onClick={handleDelete} disabled={isDisabled}>
        <FaTrashAlt />
      </button>
      
    </div>
  );
};

export default RowActions;
  


