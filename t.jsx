import React, { useState } from "react";
import RowActions from "./RowActions";

const TableRow = ({
  data,
  setIsData,
  selectedRows,
  setSelectedRows,
  editingRowId,
  setEditingRowId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(data);
  const isSelected = selectedRows.includes(data.id);
  const isDisabled = editingRowId !== null && editingRowId !== data.id;
  

  const toggleRowSelection = () => {
    setSelectedRows((currentSelectedRows) => {
      if (isSelected) return currentSelectedRows.filter((id) => id !== data.id);
      return [...currentSelectedRows, data.id];
    });
  };

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
          setIsEditing={setIsEditing}
          setIsData={setIsData}
          data={userData}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
          isDisabled={isDisabled}
        />
      </td>
    </tr>
  );
};

export default TableRow;


















// RowAction








// import React from "react";
// import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

// const RowActions = ({
//   isEditing,
//   setIsData,
//   currentRowId,
//   editingRowId,
//   setEditingRowId,
//   isDisabled,
// }) => {
//   const handleDelete = () => {
//     setIsData((prevData) => prevData.filter((user) => user.id !== currentRowId));
//   };

//   const handleEditToggle = () => {
//     if (isEditing) {
//       setEditingRowId(null);
//     } else {
//       setEditingRowId(currentRowId);
//     }
//   };

//   return (
//     <div>
//       <button className={isEditing ? "save" : "edit"} 
//       onClick={handleEditToggle} disabled={isDisabled}>
//         {isEditing ? <FaSave /> : <FaEdit />}
//       </button>
//       <button className="delete" onClick={handleDelete} disabled={isDisabled}>
//         <FaTrashAlt />
//       </button>
//     </div>
//   );
// };

// export default RowActions;





































// CSS 
@media (max-width: 768px) {
  .pagination button {
    padding: 6px 10px;
    font-size: 12px;
  }

  .pagination-container {
    padding: 10px;

  }

  .search-container {
    margin-bottom: 10px;

  }

  .search-container input {
    padding: 6px 10px;
    font-size: 12px;

  }

  .search-container button {
    padding: 6px 10px;
    font-size: 12px;

  }



}


@media (max-width: 480px) {
  .pagination button {
    padding: 4px 8px;
    font-size: 10px;
  }

  .pagination-container {
    padding: 8px;  

  }

  .search-container {     
    margin-bottom: 8px;

  }

  .search-container input {     
    padding: 4px 8px;     
    font-size: 10px;

  } 

  .search-container button {     
    padding: 4px 8px;     
    font-size: 10px;

  } 


}


@media (max-width: 320px) {
  .pagination button {
    padding: 2px 4px;
    font-size: 8px;
  } 

  .pagination-container {    
    padding: 6px;    

  } 

  .search-container {     
    margin-bottom: 6px; 
  }

  .search-container input {     
    padding: 2px 4px;     
    font-size: 8px;

  } 

  .search-container button {      
    padding: 2px 4px;     
    font-size: 8px;

  }

}



@media (max-width: 240px) {
  .pagination button {
    padding: 1px 2px;
    font-size: 6px;
  } 

  .pagination-container {    
    padding: 4px;    

  } 

  .search-container {     
    margin-bottom: 4px; 
  }

  .search-container input {     
    padding: 1px 2px;     
    font-size: 6px;

  } 

  .search-container button {      
    padding: 1px 2px;     
    font-size: 6px;

  }

}

@media (max-width: 160px) {
  .pagination button {
    padding: 0.5px 1px;
    font-size: 4px;
  } 

  .pagination-container {    
    padding: 2px;    

  } 

  .search-container {     
    margin-bottom: 2px; 
  }

  .search-container input {     
    padding: 0.5px 1px;     
    font-size: 4px;

  } 

  .search-container button {      
    padding: 0.5px 1px;     
    font-size: 4px;

  }

} 

@media (max-width: 120px) {
  .pagination button {
    padding: 0.25px 0.5px;
    font-size: 2px;
  }   

  .pagination-container {    
    padding: 1px;    

  } 

  .search-container {     
    margin-bottom: 1px; 
  }   

  .search-container input {        
    padding: 0.25px 0.5px;     
    font-size: 2px;

  } 

  .search-container button {      
    padding: 0.25px 0.5px;     
    font-size: 2px;

  }

}



