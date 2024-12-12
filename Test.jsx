// import React from "react";

// // SelectAllCheckBox component jo Select All logic ko handle karega
// const SelectAllCheckBox = ({ currentData, selectedRows, setSelectedRows }) => {
//   // Function jo "Select All" checkbox ke toggle ko handle karega
//   const handleSelectAll = (e) => {
//     const isChecked = e.target.checked; // Checkbox ka current state (checked ya unchecked)

//     if (isChecked) {
//       // Agar checkbox checked hai, to current page ke rows select kar lo
//       const currentPageIds = currentData.map((row) => row.id); // Current page ke saare row IDs ko collect karte hain
//       setSelectedRows((prevSelected) => [
//         ...new Set([...prevSelected, ...currentPageIds]), // Selected rows mein current page ke rows ko add karte hain
//       ]);
//     } else {
//       // Agar checkbox unchecked hai, to current page ke rows ko deselect kar do
//       const currentPageIds = currentData.map((row) => row.id); // Current page ke row IDs
//       setSelectedRows((prevSelected) =>
//         prevSelected.filter((id) => !currentPageIds.includes(id)) // Current page ke rows ko selected rows se remove karte hain
//       );
//     }
//   };

//   // Yeh check kar raha hai ki current page ke saare rows selected hain ya nahi
//   const isAllSelected = currentData.every((row) => selectedRows.includes(row.id));

//   return (
//     <div>
//       {/* Checkbox jo Select All aur Deselect All manage karega */}
//       <input
//         type="checkbox"
//         onChange={handleSelectAll} // Checkbox toggle hone par handleSelectAll function call hoga
//         checked={isAllSelected} // Agar current page ke saare rows selected hain, to checkbox checked dikhega
//       />
//     </div>
//   );
// };

// export default SelectAllCheckBox;



























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

  const toggleRowSelection = () => {
    setSelectedRows((prev) =>
      isSelected ? prev.filter((id) => id !== data.id) : [...prev, data.id]
    );
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
            />
          </td>
          <td>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="role"
              value={data.role}
              onChange={handleInputChange}
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
          // setIsEditing={() => {}}
          // setIsEditing={setIsEditing}
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








// import React from "react";
// import RowActions from "./RowActions";

// const TableRow = ({
//   data,
//   setIsData,
//   selectedRows,
//   setSelectedRows,
//   editingRowId,
//   setEditingRowId,
//   // isDisabled,
// }) => {
//   const isSelected = selectedRows.includes(data.id);
//   const isEditing = editingRowId === data.id;
//   const isDisabled = editingRowId !== null && !isEditing;

//   // Input change handler
//   const handleInputChange = (e) => {
//     if (e.key === "Enter" || e.type === "click") {}
//     const { name, value } = e.target;
//     setIsData((prevData) =>
//       prevData.map((user) =>
//         user.id === data.id ? { ...user, [name]: value } : user
//       )
//     );
//   };

//   const toggleRowSelection = () => {
//     setSelectedRows((prev) =>
//       isSelected ? prev.filter((id) => id !== data.id) : [...prev, data.id]
//     );
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
//             />
//           </td>
//           <td>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleInputChange}
//             />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="role"
//               value={data.role}
//               onChange={handleInputChange}
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
//           // setIsEditing={() => {}}
//           // setIsEditing={setIsEditing}
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







