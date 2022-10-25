import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useHistory } from 'react-router-dom'

interface LoginProps {
  setIsUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<LoginProps> = ({setIsUserAuth}) => {
  const history = useHistory()
  const handleSubmit = () => { 
    setIsUserAuth(false)
    history.push("/login")
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={handleSubmit}>
          Logout        
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
