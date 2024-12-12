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

  // Handle update on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditingRowId(null); // Exit edit mode
    }
  };

  // Toggle row selection
  const toggleRowSelection = () => {
    setSelectedRows((prev) =>
      isSelected ? prev.filter((id) => id !== data.id) : [...prev, data.id]
    );
  };

  // Save changes on button click
  const handleSave = () => {
    setEditingRowId(null); // Exit edit mode
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
              onKeyDown={handleKeyDown} // Update on Enter key press
            />
          </td>
          <td>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Update on Enter key press
            />
          </td>
          <td>
            <input
              type="text"
              name="role"
              value={data.role}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Update on Enter key press
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
          handleSave={handleSave} // Save changes on button click
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
