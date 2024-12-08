import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({ data, isSelected, onRowSelect}) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(data);

   
 

  // Edit toggle function
  const handleEditToggle = () => setIsEditing(!isEditing);


  // Edidting data add function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

 

  return (
    <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>

      {/* Checkbox input */}
      <td>
        <input type="checkbox"
           checked={isSelected}
           onChange={() => onRowSelect(data.id)}
          />
      </td>


      {isEditing ? (
        <>
        {/* Name input */}
          <td>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </td>

          {/* Email input */}
          <td>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </td>

          {/* Role input */}
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
          onEditToggle={handleEditToggle}
        />
      </td>
    </tr>
  );
};

export default TableRow;
