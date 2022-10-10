import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonLabel,
  IonListHeader,
} from "@ionic/react";
import DashboardRow from "./DashboardRow";
import { TypeFoodLog } from "../globals/interfaces";
import AnimatedProgressbar from "./animatedProgressbar";


type ContainerProps = {
  food: Array<Record<symbol, TypeFoodLog>>;
}

const DashContainer: React.FC<ContainerProps> = ({ food }) => {
  
  return (
  <IonContent>
    <IonLabel>Caloric Progress</IonLabel>
    <AnimatedProgressbar />
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonListHeader lines="full" color="primary">
            <IonLabel>Breakfast</IonLabel>
          </IonListHeader>
          {food.map((item: any) => {
            return <DashboardRow key={item.id} item={item} />;
          })}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonListHeader lines="full" color="primary">
            <IonLabel>Lunch</IonLabel>
          </IonListHeader>
          {food.map((item: any) => {
            return <DashboardRow key={item.id} item={item} />;
          })}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonListHeader lines="full" color="primary">
            <IonLabel>Dinner</IonLabel>
          </IonListHeader>
          {food.map((item: any) => {
            return <DashboardRow key={item.id} item={item} />;
          })}
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
  )
};

export default DashContainer;
