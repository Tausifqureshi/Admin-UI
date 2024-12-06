import React from "react";

const RowActions = ({ data, seIsDatat }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.role}</td>
    </tr>
  );
};

export default RowActions;
