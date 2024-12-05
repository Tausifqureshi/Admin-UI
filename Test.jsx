import React, { useState } from 'react';
import TableRow from './TableRow';
import SelectAllCheckbox from './SelectAllCheckbox';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Table = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Search handler
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  // Row selection handler
  const toggleRowSelection = (userId) => {
    setSelectedRows(prevSelectedRows => {
      if (prevSelectedRows.includes(userId)) {
        return prevSelectedRows.filter(id => id !== userId);
      }
      return [...prevSelectedRows, userId];
    });
  };

  // Delete selected users
  const handleDeleteSelected = () => {
    setFilteredUsers(filteredUsers.filter(user => !selectedRows.includes(user.id)));
    setSelectedRows([]);
  };

  return (
    <div>
      <SearchBar query={searchQuery} onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <SelectAllCheckbox onSelectAll={() => {}} isAllSelected={false} />
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <TableRow
              key={user.id}
              user={user}
              onRowSelect={toggleRowSelection}
              selectedRows={selectedRows}
              onDelete={handleDeleteSelected}
            />
          ))}
        </tbody>
      </table>
      <button className="delete-selected" onClick={handleDeleteSelected}>Delete Selected</button>
      <Pagination 
        totalItems={filteredUsers.length}
        itemsPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
