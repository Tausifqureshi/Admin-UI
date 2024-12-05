// 1 App
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table/Table';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <Table users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;












// 2  import React from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import TableBody from './TableBody';
import SelectAllCheckbox from './SelectAllCheckbox';

const Table = ({ users, setUsers }) => {
  return (
    <div>
      <SearchBar users={users} setUsers={setUsers} />
      <table>
        <thead>
          <tr>
            <SelectAllCheckbox users={users} setUsers={setUsers} />
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <TableBody users={users} setUsers={setUsers} />
      </table>
      <Pagination users={users} setUsers={setUsers} />
    </div>
  );
};

export default Table;




// import React, { useState } from 'react';

const SearchBar = ({ users, setUsers }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.role.toLowerCase().includes(searchQuery)
    );
    setUsers(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;




// 4 import React, { useState } from 'react';
import TableRow from './TableRow';

const TableBody = ({ users, setUsers }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(row => row !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    const remainingUsers = users.filter(user => !selectedRows.includes(user.id));
    setUsers(remainingUsers);
    setSelectedRows([]);
  };

  return (
    <tbody>
      {users.map(user => (
        <TableRow
          key={user.id}
          user={user}
          isSelected={selectedRows.includes(user.id)}
          onSelect={toggleRowSelection}
          onDelete={() =>
            setUsers(users.filter(u => u.id !== user.id))
          }
        />
      ))}
      <button onClick={deleteSelected}>Delete Selected</button>
    </tbody>
  );
};

export default TableBody;




// import React from 'react';
import RowActions from './RowActions';

const TableRow = ({ user, isSelected, onSelect, onDelete }) => {
  return (
    <tr className={isSelected ? 'selected' : ''}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(user.id)}
        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <RowActions user={user} onDelete={onDelete} />
      </td>
    </tr>
  );
};

export default TableRow;



// 6 import React from 'react';

const RowActions = ({ user, onDelete }) => {
  return (
    <div>
      <button onClick={() => alert(`Editing user: ${user.name}`)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default RowActions;




// 7 import React, { useState } from 'react';

const Pagination = ({ users, setUsers }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  setUsers(paginatedUsers);

  return (
    <div>
      <button onClick={() => changePage(1)} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={() => changePage(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;




// 8 import React from 'react';

const SelectAllCheckbox = ({ users, selectedRows, setSelectedRows }) => {
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRows(users.map(user => user.id));
    } else {
      setSelectedRows([]);
    }
  };

  const isAllSelected = users.length > 0 && selectedRows.length === users.length;

  return (
    <th>
      <input
        type="checkbox"
        checked={isAllSelected}
        onChange={handleSelectAllChange}
      />
    </th>
  );
};

export default SelectAllCheckbox;



















































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table/Table';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <Table users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
import React from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import TableBody from './TableBody';

const Table = ({ users, setUsers }) => {
  return (
    <div>
      <SearchBar users={users} setUsers={setUsers} />
      <TableBody users={users} setUsers={setUsers} />
      <Pagination users={users} setUsers={setUsers} />
    </div>
  );
};

export default Table;
import React, { useState } from 'react';

const SearchBar = ({ users, setUsers }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.role.toLowerCase().includes(searchQuery)
    );
    setUsers(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
import React, { useState } from 'react';
import TableRow from './TableRow';

const TableBody = ({ users, setUsers }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter(row => row !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    const remainingUsers = users.filter(user => !selectedRows.includes(user.id));
    setUsers(remainingUsers);
    setSelectedRows([]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedRows.length === users.length && users.length > 0}
                onChange={(e) =>
                  setSelectedRows(e.target.checked ? users.map(u => u.id) : [])
                }
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow
              key={user.id}
              user={user}
              isSelected={selectedRows.includes(user.id)}
              onSelect={toggleRowSelection}
              onDelete={() =>
                setUsers(users.filter(u => u.id !== user.id))
              }
            />
          ))}
        </tbody>
      </table>
      <button onClick={deleteSelected}>Delete Selected</button>
    </div>
  );
};

export default TableBody;
import React, { useState } from 'react';

const Pagination = ({ users, setUsers }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  setUsers(paginatedUsers);

  return (
    <div>
      <button onClick={() => changePage(1)} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={() => changePage(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
