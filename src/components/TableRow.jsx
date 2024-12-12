import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({ data,setIsData, selectedRows, setSelectedRows,
  editingRowId,
  setEditingRowId,

  // isAnyRowEditing, // New prop for checking if any row is in edit mode
 }) => {
  const [isEditing, setIsEditing] = useState(false); // Editing mode handle karne ke liye state
  const [userData, setUserData] = useState(data); // Row ka data manage karne ke liye state
  const isSelected = selectedRows.includes(data.id); // Yeh check karta hai ki current row selected hai ya nahi
  // const isDisabled = editingRowId !== null && !isEditing;
  const isDisabled = editingRowId !== null && !isEditing;
   

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
 
   
    // Editing data add function
    // const handleInputChange = (e) => {
    //   const { name, value } = e.target; // Form input se name aur value ko extract karte hain
    //   setUserData({ ...userData, [name]: value }); // Data ko update karte hain
    // };    


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setIsData((prevData) =>
        prevData.map((user) =>
          user.id === data.id ? { ...user, [name]: value } : user
        )
      );
    };



  return (
    <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>

      {/* Checkbox input */}
      <td>
        <input type="checkbox"
        checked={isSelected} // Check karta hai ki row selected hai ya nahi
        onChange={toggleRowSelection} // Row selection toggle karta hai
        // disabled={isAnyRowEditing && !isEditing} // Disable checkbox if any row is editing
        disabled={isDisabled} // Disable checkbox if another row is in edit mode
                 
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
          setIsEditing={setIsEditing}
          setIsData={setIsData}
          data={data}

          setEditingRowId={setEditingRowId}
          currentRowId={data.id}

          editingRowId={editingRowId} // Pass editingRowId for button disable logic
          isDisabled={isDisabled} // Disable buttons for non-edit rows


// // 
//           isEditing={isEditing}
//           // setIsEditing={() => {}}
//           setIsEditing={setIsEditing}
//           setIsData={setIsData}
//           currentRowId={data.id}
//           editingRowId={editingRowId}
//           setEditingRowId={setEditingRowId}
//           isDisabled={isDisabled}
         
        />
      </td>
    </tr>
  );
};

export default TableRow;













// import React from "react";
// import RowActions from "./RowActions";

// const TableRow = ({
//   data,
//   setIsData,
//   selectedRows,
//   setSelectedRows,
//   editingRowId,
//   setEditingRowId,
// }) => {
//   const isSelected = selectedRows.includes(data.id);
//   const isEditing = editingRowId === data.id;
//   const isDisabled = editingRowId !== null && !isEditing;

//   // Input change handler
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setIsData((prevData) =>
//       prevData.map((user) =>
//         user.id === data.id ? { ...user, [name]: value } : user
//       )
//     );
//   };

//   // Handle update on Enter key press
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       setEditingRowId(null); // Exit edit mode
//     }
//   };

//   // Toggle row selection
//   const toggleRowSelection = () => {
//     setSelectedRows((prev) =>
//       isSelected ? prev.filter((id) => id !== data.id) : [...prev, data.id]
//     );
//   };

//   // Save changes on button click
//   const handleSave = () => {
//     setEditingRowId(null); // Exit edit mode
//   };

//   return (
//     <tr style={{ backgroundColor: isSelected ? "lightgray" : "white" }}>
//       <td>
//         <input
//           type="checkbox"
//           checked={isSelected}
//           onChange={toggleRowSelection}
//           disabled={isDisabled}
//         />
//       </td>

//       {isEditing ? (
//         <>
//           <td>
//             <input
//               type="text"
//               name="name"
//               value={data.name}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown} // Update on Enter key press
//             />
//           </td>
//           <td>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown} // Update on Enter key press
//             />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="role"
//               value={data.role}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown} // Update on Enter key press
//             />
//           </td>
//         </>
//       ) : (
//         <>
//           <td>{data.name}</td>
//           <td>{data.email}</td>
//           <td>{data.role}</td>
//         </>
//       )}
//       <td>
//         <RowActions
//           isEditing={isEditing}
//           handleSave={handleSave} // Save changes on button click
//           setIsData={setIsData}
//           currentRowId={data.id}
//           editingRowId={editingRowId}
//           setEditingRowId={setEditingRowId}
//           isDisabled={isDisabled}
//         />
//       </td>
//     </tr>
//   );
// };

// export default TableRow;
