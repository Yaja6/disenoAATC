import { IonContent, IonList, IonBackButton, IonButtons, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput, IonTitle } from '@ionic/react';
import React from 'react';
import './Home.css';
import regr from "../images/repartidor.svg";
import regp from "../images/estar.svg";

const WelcomeSeller: React.FC = () => {
    return (
        <IonPage >
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons  slot="start">
                        <IonBackButton  text="" icon="add" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                    <IonLabel> Vamos por los primeros pasos..</IonLabel>
                    </IonItem>
                   
                    <IonItem>
                    <IonLabel position="stacked">Ingresa el nombre de tu negocio</IonLabel>
                    <IonInput> </IonInput>
                    </IonItem>
                    <IonItemDivider class="m">

                        <IonLabel >
                            <p>Continúa registrando tus productos o repartidores</p><br />
                            <IonButton class="b1" expand="block" routerLink="/RegProduct"><IonImg class="i2" src={regp}></IonImg>Registrar <br/> Productos</IonButton><br />
                            <IonButton class="b2" expand="block" routerLink="/RegDealer"><IonImg class="i2" src={regr}></IonImg>Registrar <br/> Repartidores</IonButton><br />


                        </IonLabel>
                    </IonItemDivider>
                </IonList>
            </IonContent>

        </IonPage>
    );
};

export default WelcomeSeller;
