// src/components/Table.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import SelectAllCheckbox from "./SelectAllCheckbox";
import SearchBar from "./SearchBar";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
      .then(response => setUsers(response.data));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectRow = (userId) => {
    setSelectedRows(prev => {
      if (prev.includes(userId)) {
        return prev.filter(id => id !== userId); // Deselect
      }
      return [...prev, userId]; // Select
    });
  };

  const handleDeleteRow = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const handleEditRow = (editedUser) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === editedUser.id ? editedUser : user
      )
    );
  };

  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedRows(users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map(user => user.id));
    } else {
      setSelectedRows([]);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <SearchBar search={search} handleSearchChange={handleSearchChange} />
      <table>
        <thead>
          <tr>
            <th>
              <SelectAllCheckbox handleSelectAll={handleSelectAll} isSelected={selectedRows.length === currentRows.length} />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map(user => (
            <TableRow
              key={user.id}
              user={user}
              onEdit={handleEditRow}
              onDelete={handleDeleteRow}
              onSelect={handleSelectRow}
              isSelected={selectedRows.includes(user.id)}
            />
          ))}
        </tbody>
      </table>
      <Pagination 
        totalRows={filteredUsers.length} 
        rowsPerPage={rowsPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      {selectedRows.length > 0 && (
        <button onClick={() => {
          selectedRows.forEach(rowId => handleDeleteRow(rowId));
          setSelectedRows([]);
        }}>
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default Table;
