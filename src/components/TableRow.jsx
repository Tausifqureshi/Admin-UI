// import React from "react";
// import RowActions from "./RowActions";

// function TableRow({ data, seIsDatat }) {
//   return(
//     <tr>
//     <td>
//      <input type="checkbox" />
//     </td>
//     <td>{data.name}</td>
//     <td>{data.email}</td>
//     <td>{data.role}</td>
//     <td>
//       <RowActions data={data} seIsDatat={seIsDatat} />
//     </td>
//   </tr>
//   )
// }

// export default TableRow;




import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({ data,}) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(data);
  const [isSelected, setIsSelected] = useState(false);
   
 

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

 
  const handleSelectRow = () => {
    setIsSelected(!isSelected);
  };

  return (
    <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>
      <td>
        <input type="checkbox" onChange={handleSelectRow}/>
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
        <RowActions
          isEditing={isEditing}
          onEditToggle={handleEditToggle}
          userId={userData.id}
        />
      </td>
    </tr>
  );
};

export default TableRow;
