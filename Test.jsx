import React, { useState } from 'react';

const RowActions = ({ user, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onEdit(user.id, editableData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <td>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editableData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={editableData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="role"
            value={editableData.role}
            onChange={handleInputChange}
          />
        </>
      ) : (
        <>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.role}</span>
        </>
      )}

      
      <button className="edit" onClick={toggleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button className="delete" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </td>
  );
};

export default RowActions;
