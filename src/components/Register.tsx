import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { AuthProps, FormChangeEvent } from '../globals/interfaces';


const Register: React.FC<AuthProps> = ({setIsUserAuth}) => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    // this will be extracted into a global function, I will most likely use context. But I may also use redux, mainly because I want to improve in using it.
    const history = useHistory()
    const handleChange = (e: FormChangeEvent["event"]) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }
    const handleSubmit = () => { 
        setIsUserAuth(true)
        console.log(userInfo)
        history.push("/dashboard")
    }

    return (
        <>
        <IonList>
            <IonItem>
            <IonLabel>Email:</IonLabel>
            <IonInput name="email" type="email" placeholder="email@domain.com" value={userInfo.email} onInput={handleChange} />
            </IonItem>

            <IonItem>
            <IonLabel>Password:</IonLabel>
            <IonInput name="password" type="password" placeholder="***********" value={userInfo.password} onInput={handleChange}/>
            </IonItem>

            <IonItem>
            <IonLabel>Confirm Password:</IonLabel>
            <IonInput name="confirmPassword" type="password" placeholder="***********" value={userInfo.confirmPassword} onInput={handleChange}/>
            </IonItem>
        </IonList>
        <IonButton onClick={handleSubmit}>
            Submit     
        </IonButton>
        </>
    );
}
export default Register;