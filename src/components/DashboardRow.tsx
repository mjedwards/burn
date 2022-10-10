import React from "react";
import { IonList, IonItem, IonLabel } from "@ionic/react";
// import { nutrition } from "ionicons/icons";

// {
//     title: '',
//     itemName: '',
//     calories: number,
//     nutritionFacts: [
//         {
//             name: '',
//             howMuch: '',
//             metric: '',
//             percentage: '',
//         },
//         {},
//         {},
//         {},
//     ],
//     brand: '',
// }
interface ItemInterface {
    id: number;
    title: string;
    itemName: string;
    calories: string;
  }
interface ContainerProps {
  item: ItemInterface;
}

const DashboardRow: React.FC<ContainerProps> = ({ item }) => {
  console.log(item);
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
