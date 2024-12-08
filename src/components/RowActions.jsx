import React from "react";
import { IonButton } from "@ionic/react";  // Import IonButton from Ionic

const RowActions = ({ isEditing, onEditToggle }) => {
  return (
    <div>
      {isEditing ? (
        <IonButton className="save" onClick={onEditToggle}>
          Save
        </IonButton>
      ) : (
        <IonButton className="edit" onClick={onEditToggle}>
          Edit
        </IonButton>
      )}
      <IonButton className="delete">
        Delete
      </IonButton>
    </div>
  );
};

export default RowActions;
