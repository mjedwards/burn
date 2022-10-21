import React, { useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';

interface ModalProps {
    open: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    setOpen: Function;
}

const Modal: React.FC<ModalProps> = ({open, setOpen}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);


  return (
        <IonModal
          ref={modal}
          isOpen={open}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => setOpen(false)}>
                  Cancel
                </IonButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => setOpen(false)}>
                  Log
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Enter your dish</IonLabel>
              <IonInput ref={input} type="text" placeholder="Your dish" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Enter dish calories</IonLabel>
              <IonInput ref={input} type="text" placeholder="Dish Calories" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Meal Type</IonLabel>
              <IonInput ref={input} type="text" placeholder="Breakfast, Lunch, Dinner" />
            </IonItem>
          </IonContent>
        </IonModal>
  );
};

export default Modal;
