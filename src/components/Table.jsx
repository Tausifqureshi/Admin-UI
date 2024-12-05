import React from 'react'
import RowActions from './RowActions'
import SearchBar from './SearchBar'

const Table = ({ data , setIsData}) => {
  // const [filteredUsers, setFilteredUsers] = useState(users);
  return (
    <div>
    <SearchBar  data={data} setIsData={setIsData} />
    <table>
      <thead>
        <tr>
        {/* <SelectAllCheckbox users={users} setUsers={setUsers} /> */}
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
          {data.map(user => (
            <RowActions key={user.id} data={user} setIsData={setIsData}/>
          ))}
        </tbody>

    </table>
    {/* <Pagination users={users} setUsers={setUsers} /> */}
    </div>
  )
}

export default Table
