import React from "react";

const RowActions = ({ data,isEditing, onEditToggle, onDelete }) => {
  return (
    <div>
      <button className={isEditing ? "save" : "edit"} onClick={onEditToggle}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default RowActions;










