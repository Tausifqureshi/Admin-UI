import React from "react";

// SelectAllCheckBox component jo Select All logic ko handle karega
const SelectAllCheckBox = ({ currentData, selectedRows, setSelectedRows }) => {
  // Function jo "Select All" checkbox ke toggle ko handle karega
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked; // Checkbox ka current state (checked ya unchecked)

    if (isChecked) {
      // Agar checkbox checked hai, to current page ke rows select kar lo
      const currentPageIds = currentData.map((row) => row.id); // Current page ke saare row IDs ko collect karte hain
      setSelectedRows((prevSelected) => [
        ...new Set([...prevSelected, ...currentPageIds]), // Selected rows mein current page ke rows ko add karte hain
      ]);
    } else {
      // Agar checkbox unchecked hai, to current page ke rows ko deselect kar do
      const currentPageIds = currentData.map((row) => row.id); // Current page ke row IDs
      setSelectedRows((prevSelected) =>
        prevSelected.filter((id) => !currentPageIds.includes(id)) // Current page ke rows ko selected rows se remove karte hain
      );
    }
  };

  // Yeh check kar raha hai ki current page ke saare rows selected hain ya nahi
  const isAllSelected = currentData.every((row) => selectedRows.includes(row.id));

  return (
    <div>
      {/* Checkbox jo Select All aur Deselect All manage karega */}
      <input
        type="checkbox"
        onChange={handleSelectAll} // Checkbox toggle hone par handleSelectAll function call hoga
        checked={isAllSelected} // Agar current page ke saare rows selected hain, to checkbox checked dikhega
      />
    </div>
  );
};

export default SelectAllCheckBox;
