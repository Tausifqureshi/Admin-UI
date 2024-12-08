\import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({ data, isSelected, onRowSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(data);

  // Toggle Edit Mode
  const handleEditToggle = () => setIsEditing(!isEditing);

  // Update User Data
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
          onChange={() => onRowSelect(data.id)}
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
        <RowActions isEditing={isEditing} onEditToggle={handleEditToggle} />
      </td>
    </tr>
  );
};

export default TableRow;
