import { IonButtons, IonCardContent, IonCard, IonTitle, IonBackButton, IonContent, IonList, IonCheckbox, IonFooter, IonCol, IonRow, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './style.css';
import limpieza from '../images/limp.jpeg';
import tec from '../images/tec.jpg';
import alimentos from '../images/alime.png';

const Categories: React.FC = () => {
    return (
        <IonPage >
            <IonHeader className="ion-no-border">
                <IonToolbar>

                    <IonButtons color="dark" slot="start">
                        <IonBackButton color="dark" defaultHref="/Home" text="" icon="add" />
                        <IonTitle>Categorías</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>


                <IonLabel >

                    <IonButton class="b4" expand="block" routerLink="/Food"><IonImg src={alimentos}></IonImg></IonButton>
                    <IonButton class="b4" expand="block" routerLink="/Tecnology"><IonImg src={tec}></IonImg></IonButton>
                    <IonButton class="b4" expand="block" routerLink="/ProductList"><IonImg src={limpieza}></IonImg></IonButton>


                </IonLabel>


            </IonContent>

        </IonPage>
    );
};

export default Categories;
