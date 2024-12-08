import React from "react";
import RowActions from "./RowActions";

function TableRow({ data, seIsDatat }) {
  return(
    <tr>
    <td>
     <input type="checkbox" />
    </td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.role}</td>
    <td>
      <RowActions data={data} seIsDatat={seIsDatat} />
    </td>
  </tr>
  )
}

export default TableRow;
