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

interface ContainerProps {
  food: object[];
}

const DashContainer: React.FC<ContainerProps> = ({ food }) => (
  <IonContent>
    <IonLabel>Caloric Progress</IonLabel>
    <IonProgressBar color="primary" value={0.5}></IonProgressBar>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonListHeader lines="full" color="primary">
            <IonLabel>Breakfast</IonLabel>
          </IonListHeader>
          {food.map((item) => {
            return <DashboardRow item={item} />;
          })}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonListHeader lines="full" color="primary">
            <IonLabel>Lunch</IonLabel>
          </IonListHeader>
          {food.map((item) => {
            return <DashboardRow item={item} />;
          })}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonListHeader lines="full" color="primary">
            <IonLabel>Dinner</IonLabel>
          </IonListHeader>
          {food.map((item) => {
            return <DashboardRow item={item} />;
          })}
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);

export default DashContainer;
