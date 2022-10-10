import React from "react";
import { IonList, IonItem, IonLabel } from "@ionic/react";
import { TypeFoodLog } from "../globals/interfaces";

interface ContainerProps {
  item: TypeFoodLog;
}

const DashboardRow: React.FC<ContainerProps> = ({ item }) => {
  return (
    <IonList>
      <IonItem>
        <IonLabel>{item.itemName}</IonLabel>
        <p>{item.calories}</p>
      </IonItem>
    </IonList>
  );
};

export default DashboardRow;
