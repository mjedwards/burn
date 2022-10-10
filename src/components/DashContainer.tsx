import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonLabel,
  IonListHeader,
  IonProgressBar,
} from "@ionic/react";
import DashboardRow from "./DashboardRow";
import { TypeFoodLog } from "../globals/interfaces";

type ContainerProps = {
  food: Array<Record<symbol, TypeFoodLog>>;
}

const DashContainer: React.FC<ContainerProps> = ({ food }) => (
  // const caloricGoal = 2000;
  // let caloricProgress = 
  <IonContent>
    <IonLabel>Caloric Progress</IonLabel>
    <IonProgressBar color="primary" value={0.5}></IonProgressBar>
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
);

export default DashContainer;
