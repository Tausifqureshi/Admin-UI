import React, { useState } from 'react'

const Table = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
      
    </div>
  )
}

export default Table
