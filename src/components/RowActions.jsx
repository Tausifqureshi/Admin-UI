import React from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

const RowActions = ({
  isEditing, // Abhi row edit mode me hai ya nahi
  setIsEditing, // Edit state ko toggle karne ke liye function
  setIsData, // Data ko update karne ke liye function
  data, // Current row ka data
  editingRowId, // Kaunsa row abhi edit ho raha hai
  setEditingRowId, // Editing row ko set karne ke liye function
  isDisabled, // Button disable karne ke liye flag
}) => {
  // Row delete karne ka function
  const handleDelete = () => {
    setIsData((prevData) => prevData.filter((user) => user.id !== data.id));
    setEditingRowId(null); // Delete karne ke baad edit mode se bahar aana
  };

  // Edit mode ko toggle karne ka function
  const handleEditToggle = () => {
    if (isEditing) {
      setEditingRowId(null); // Agar edit mode me hai, to exit karna
    } else {
      setEditingRowId(data.id); // Agar edit mode me nahi hai, to current row ko edit mode me lana
    }
    setIsEditing((prevState) => !prevState); // Edit state ko toggle karna
  };

  return (
    <div className="btn-disabled">
      {/* Edit aur Save Button */}
      <button
        className={isEditing ? "save" : "edit"}
        onClick={handleEditToggle}
        disabled={isDisabled} // Agar disable hai to button kaam nahi karega
      >
        {isEditing ? <FaSave /> : <FaEdit />} {/* Icon toggle karna */}
      </button>

      {/* Delete Button */}
      <button
        className="delete"
        onClick={handleDelete}
        disabled={isDisabled} // Agar disable hai to button kaam nahi karega
      >
        <FaTrashAlt /> {/* Delete icon */}
      </button>
    </div>
  );
};

export default RowActions;
