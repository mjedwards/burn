import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
import Register from "../components/Register";
import { AuthProps } from "../globals/interfaces";

  
const UserRegister: React.FC<AuthProps> = ({setIsUserAuth}) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <Register setIsUserAuth={setIsUserAuth}/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default UserRegister;
  