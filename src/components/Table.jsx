import React from 'react'
import RowActions from './RowActions'
import SearchBar from './SearchBar'
import SelectAllCheckBox from './SelectAllCheckBox'

const Table = ({ data , setIsData}) => {
  // const [filteredUsers, setFilteredUsers] = useState(users);
  return (
    <div>
    <SearchBar  data={data} setIsData={setIsData} />
    <table>
      <thead>
        <tr>
        <th> <SelectAllCheckBox data={data} setIsData={setIsData} /></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>

           {/* <SelectAllCheckBox data={data} setIsData={setIsData}  /> */}
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
