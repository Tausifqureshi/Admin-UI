import React from 'react'
// import RowActions from './RowActions'
import SearchBar from './SearchBar'
import SelectAllCheckBox from './SelectAllCheckBox'
import TableRow from './TableRow'

const Table = ({ data , setIsData, originalData}) => {
  return (
    <div>
    <SearchBar data={data} setIsData={setIsData} originalData={originalData}/>
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
          {data &&data.map(user => (
            
            <TableRow key={user.id} data={user} setIsData={setIsData} originalData={originalData}/>
            
          ))}
        </tbody>

    </table>
    {/* <Pagination users={users} setUsers={setUsers} /> */}
    </div>
  )
}

export default Table
