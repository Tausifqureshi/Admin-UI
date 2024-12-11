// import React from "react";

// // SelectAllCheckBox component jo Select All logic ko handle karega
// const SelectAllCheckBox = ({ data, selectedRows, setSelectedRows }) => {
//   // Function jo "Select All" checkbox ke toggle ko handle karega
//   const handleSelectAll = (e) => {
//     const isChecked = e.target.checked; // Checkbox ka current state (checked ya unchecked)

//     if (isChecked) {
//       // Agar checkbox checked hai, to sabhi rows select kar lo
//       const allIds = data.map((row) => row.id); // Saare row IDs ko collect karte hain
//       setSelectedRows(allIds); // State mein saare IDs ko set karte hain
//     } else {
//       // Agar checkbox unchecked hai, to selection ko reset kar do
//       setSelectedRows([]); // State ko empty array set karte hain
//     }
//   };

//   return (
//     <div>
//       {/* Checkbox jo Select All aur Deselect All manage karega */}
//       <input
//         type="checkbox"
//         onChange={handleSelectAll} // Checkbox toggle hone par function call
//         checked={data.length > 0 && selectedRows.length === data.length} // Agar sab rows selected hain, to checkbox checked dikhao
//       />
//     </div>
//   );
// };

// export default SelectAllCheckBox;

















import React from 'react';

const SelectAllCheckBox = ({ currentData, selectedRows, setSelectedRows }) => {
  // "Select All" ka logic handle karna current page ke liye
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked; // Checkbox ka state check kar rahe hain

    if (isChecked) {
      // Agar checkbox checked hai to current page ke rows ko selectedRows mein daal do
      const currentPageIds = currentData.map((row) => row.id); // Current page ke sabhi row IDs
      setSelectedRows((prevSelected) => [
        ...new Set([...prevSelected, ...currentPageIds]), // Previous selected rows ke saath current page ke rows add kar rahe hain
      ]);
    } else {
      // Agar checkbox unchecked hai to current page ke rows ko selectedRows se hata do
      const currentPageIds = currentData.map((row) => row.id); // Current page ke row IDs
      setSelectedRows((prevSelected) =>
        prevSelected.filter((id) => !currentPageIds.includes(id)) // Selected rows se current page ke rows ko remove karna
      );
    }
  };

  // Yeh check kar raha hai ki current page ke saare rows selected hain ya nahi
  const isAllSelected = currentData.every((row) => selectedRows.includes(row.id));

  return (
    <input
      type="checkbox"
      onChange={handleSelectAll} // Checkbox change hone par handleSelectAll function call hoga
      checked={isAllSelected} // Agar current page ke saare rows selected hain, to checkbox checked hoga
    />
  );
};

export default SelectAllCheckBox;
