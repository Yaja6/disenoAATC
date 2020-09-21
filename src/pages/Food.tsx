import {
    IonButtons, IonCardContent, IonTitle, IonMenu,
    IonCard, IonCardHeader, IonBackButton, IonContent,
    IonList, IonCardTitle, IonFooter, IonCardSubtitle, IonRow, IonItem,
    IonItemDivider, IonButton, IonHeader, IonPage, IonLabel,
    IonToolbar, IonImg, IonInput
} from '@ionic/react';
import React from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './style.css';
import frutas from '../images/frutas.jpg';
import fsecos from '../images/fsecos.jpg';

import axios from 'axios';


const Food: React.FC = () => {
    //window.menuController = menuController;

    return (
        <IonPage >
            <IonHeader >
                
                <IonToolbar>
                    <IonButtons color="dark" slot="start">
                        <IonBackButton color="dark" text="" icon="add" />
                        <IonTitle>Alimentos</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={frutas}></IonImg>
                        <IonCardTitle>Frutas </IonCardTitle>
                        <IonCardSubtitle>-</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Variedd de frutas
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={fsecos}></IonImg>
                        <IonCardTitle>Frutos secos</IonCardTitle>
                        <IonCardSubtitle>6$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        - Nuez
                        - Almendas
                        - Maní

                    </IonCardContent>
                </IonCard>
                
            </IonContent>


        </IonPage>
    );
};

export default Food;
