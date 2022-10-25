import React from 'react';
import { useHistory } from 'react-router-dom'
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

interface LoginProps {
  setIsUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({setIsUserAuth}) => {
  const history = useHistory()
  const handleSubmit = () => { 
    setIsUserAuth(true)
    history.push("/dashboard")
  }
  return (
    <>
      <IonList>
        <IonItem>
          <IonLabel>Email input</IonLabel>
          <IonInput type="email" placeholder="email@domain.com"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Password input</IonLabel>
          <IonInput type="password" value="password"></IonInput>
        </IonItem>
      </IonList>
      <IonButton onClick={handleSubmit}>
          Submit     
      </IonButton>
    </>
  );
}
export default Login;