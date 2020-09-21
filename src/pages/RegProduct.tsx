import { IonButtons, IonAlert, IonBackButton, IonContent, IonTextarea, IonCheckbox, IonFooter, IonCol, IonRow, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React, { useState } from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './style.css';
const RegProduct: React.FC = () => {
    return (
        <IonPage >
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon="add" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>


                <form className="ion-padding" >
                    <IonItem>
                        <IonLabel position="floating">Nombre de producto:</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Descripción:</IonLabel>
                        <IonTextarea />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Precio:</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Stock: </IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonButton class="b3" className="ion-margin-top" type="submit" expand="block">
                        Añadir producto
                     </IonButton>
                </form>


            </IonContent>

        </IonPage >
    );
};

export default RegProduct;
