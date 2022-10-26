import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
import Login from "../components/Login";
import { AuthProps } from "../globals/interfaces";
  
const UserLogin: React.FC<AuthProps> = ({setIsUserAuth}) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <Login setIsUserAuth={setIsUserAuth}/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default UserLogin;
  