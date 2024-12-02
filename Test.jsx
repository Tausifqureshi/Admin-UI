// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table/Table';
import Pagination from './components/Table/Pagination';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const toggleRowSelection = (userId) => {
    setSelectedRows(prevSelectedRows => {
      if (prevSelectedRows.includes(userId)) {
        return prevSelectedRows.filter(id => id !== userId);
      }
      return [...prevSelectedRows, userId];
    });
  };

  const handleDeleteSelected = () => {
    setFilteredUsers(filteredUsers.filter(user => !selectedRows.includes(user.id)));
    setSelectedRows([]);
  };

  const handleEdit = (userId, updatedData) => {
    setFilteredUsers(filteredUsers.map(user =>
      user.id === userId ? { ...user, ...updatedData } : user
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table 
        users={filteredUsers}
        selectedRows={selectedRows}
        onRowSelect={toggleRowSelection}
        onDeleteSelected={handleDeleteSelected}
        onEdit={handleEdit}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onSelectAll={() => {}}
        isAllSelected={false}
      />
      <Pagination 
        totalItems={filteredUsers.length}
        itemsPerPage={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
