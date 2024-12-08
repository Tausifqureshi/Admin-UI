import React from "react";

// SelectAllCheckBox component jo Select All logic ko handle karega
const SelectAllCheckBox = ({ data, selectedRows, setSelectedRows }) => {
  // Function jo "Select All" checkbox ke toggle ko handle karega
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked; // Checkbox ka current state (checked ya unchecked)

    if (isChecked) {
      // Agar checkbox checked hai, to sabhi rows select kar lo
      const allIds = data.map((row) => row.id); // Saare row IDs ko collect karte hain
      setSelectedRows(allIds); // State mein saare IDs ko set karte hain
    } else {
      // Agar checkbox unchecked hai, to selection ko reset kar do
      setSelectedRows([]); // State ko empty array set karte hain
    }
  };

  return (
    <div>
      {/* Checkbox jo Select All aur Deselect All manage karega */}
      <input
        type="checkbox"
        onChange={handleSelectAll} // Checkbox toggle hone par function call
        checked={data.length > 0 && selectedRows.length === data.length} // Agar sab rows selected hain, to checkbox checked dikhao
      />
    </div>
  );
};

export default SelectAllCheckBox;
