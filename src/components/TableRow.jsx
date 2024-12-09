import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({ data, selectedRows, setSelectedRows }) => {
  const [isEditing, setIsEditing] = useState(false); // Editing mode handle karne ke liye state
  const [userData, setUserData] = useState(data); // Row ka data manage karne ke liye state
  const isSelected = selectedRows.includes(data.id); // Yeh check karta hai ki current row selected hai ya nahi


     // Function jo ek row ko select ya deselect karti hai
   const toggleRowSelection = () => {
    // State ko update karte hain selected rows manage karne ke liye
    setSelectedRows((currentSelectedRows) => {
      if (isSelected) {
        // Agar row pehle hi selected hai, toh:
        // currentSelectedRows se us row ka ID (data.id) hata dete hain
        return currentSelectedRows.filter((id) => id !== data.id);
      } else {
        // Agar row selected nahi hai, toh:
        // currentSelectedRows mein us row ka ID (data.id) add kar dete hain
        return [...currentSelectedRows, data.id];
      }
    });
  };
 
    // Edit toggle function
    const handleEditToggle = () => setIsEditing(!isEditing); // Toggle karta hai editing mode

    // Editing data add function
    const handleInputChange = (e) => {
      const { name, value } = e.target; // Form input se name aur value ko extract karte hain
      setUserData({ ...userData, [name]: value }); // Data ko update karte hain
    };

 

  return (
    <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>

      {/* Checkbox input */}
      <td>
        <input type="checkbox"
        checked={isSelected} // Check karta hai ki row selected hai ya nahi
        onChange={toggleRowSelection} // Row selection toggle karta hai
           
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
              onChange={handleInputChange}  // Name input change handle karta hai
            />
          </td>

          {/* Email input */}
          <td>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange} // Email input change handle karta hai
            />
          </td>

          {/* Role input */}
          <td>
            <input
              type="text"
              name="role"
              value={userData.role}
              onChange={handleInputChange}  // Role input change handle karta hai
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
          isEditing={isEditing} // Editing mode ko pass karte hain
          onEditToggle={handleEditToggle} // Edit mode toggle function pass karte hain
        />
      </td>
    </tr>
  );
};

export default TableRow;
