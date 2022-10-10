import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import DashContainer from "../components/DashContainer";
import { TypeFoodLog } from "../globals/interfaces";
import "./Dashboard.css";

const items: TypeFoodLog[] = [
  { id: 1, title: 'Breakfast', itemName: 'bacon and eggs with cheese on a bagel', calories:'400 kCal', },
  { id: 2, title: 'breakfast', itemName: 'cinnamon sugar oatmeal', calories:'250 kCal', },
];

const Dashboard: React.FC = () => {
  console.log(items)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DashContainer food={items}/>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
