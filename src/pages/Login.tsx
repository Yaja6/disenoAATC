import { IonBackButton, IonButtons, IonContent, IonList, IonCheckbox, IonFooter, IonCol, IonRow, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React, { useState, useEffect, useContext, useCallback } from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './style.css';
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login: React.FC = () => {

    

    return (
        <IonPage >
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon="add" defaultHref="/Home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>


                <form className="ion-padding" >
                    <IonItem>
                        <IonLabel position="floating">E-mail</IonLabel>
                        <IonInput name="username" />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Contraseña</IonLabel>
                        <IonInput type="password" name="pass" />
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>Recordarme</IonLabel>
                        <IonCheckbox defaultChecked={true} slot="start" />
                    </IonItem>
                    <IonButton  class="b3" className="ion-margin-top" expand="block" routerLink="/Categories">
                        Ingresa
                     </IonButton>
                </form>


            </IonContent>

        </IonPage>
    );
};

export default Login;
