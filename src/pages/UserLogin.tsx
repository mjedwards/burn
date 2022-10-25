import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
import Login from "../components/Login";

interface LoginProps {
  setIsUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
  
const UserLogin: React.FC<LoginProps> = ({setIsUserAuth}) => {
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
  