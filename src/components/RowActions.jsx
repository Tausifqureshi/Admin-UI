import React from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

const RowActions = ({ isEditing, onEditToggle, onDelete }) => {
  return (
    <div>
      <button className={isEditing ? "save" : "edit"} onClick={onEditToggle}>
        {/* {isEditing ? "Save" : "Edit"} */}
        {isEditing ? <FaSave /> : <FaEdit />}
       </button>

      <button className="delete" onClick={onDelete}>
       <FaTrashAlt />
      </button>
    </div>
  );
};

export default RowActions;










