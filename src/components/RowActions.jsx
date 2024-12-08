
// import React from "react";
// import { IonButton } from "@ionic/react";  // Import IonButton from Ionic
// import { FaSave, FaEdit, FaTrashAlt } from "react-icons/fa";  // Import React Icons

// const RowActions = ({ data, seIsDatat }) => {
//   return (
//     <div>
//       {data ? (
//         <IonButton className="save" onClick={data}>
//           <FaSave  title="Save"/>  {/* React Icon for Save */}
//         </IonButton>
//       ) : (
//         <IonButton className="edit" onClick={data}>
//           <FaEdit title="Edit"/>  {/* React Icon for Edit */}
//         </IonButton>
//       )}
//       <IonButton className="delete">
//         <FaTrashAlt title="Delete"/>  {/* React Icon for Delete */}
//       </IonButton>
//     </div>
//   );
// };

// export default RowActions;




// import React from "react";

// const RowActions = ({ isEditing, onEditToggle }) => {
//   return (
//     <div>
//       {isEditing ? (
//         <button className="save" onClick={onEditToggle}>
//           Save
//         </button>
//       ) : (
//         <button className="edit" onClick={onEditToggle}>
//           Edit
//         </button>
//       )}
//       <button className="delete">Delete</button>
//     </div>
//   );
// };

// export default RowActions;



import React from "react";

const RowActions = ({ data,isEditing, onEditToggle, onDelete }) => {
  return (
    <div>
      <button className={isEditing ? "save" : "edit"} onClick={onEditToggle}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>


     
    </div>
  );
};

export default RowActions;

