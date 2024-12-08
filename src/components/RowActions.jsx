import React from "react";

const RowActions = ({ data, seIsDatat }) => {
  return (
   <>
    <button onClick={() => seIsDatat(data)}>Edit</button>
    <button onClick={() => seIsDatat(data)}>Delete</button>
    
   </>
  );
};

export default RowActions;
