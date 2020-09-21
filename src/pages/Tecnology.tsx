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
import cel2 from '../images/cel2.jpg';
import cel1 from '../images/cel1.webp';
import cel3 from '../images/cel3.jpg';
import lap1 from '../images/lap1.jpg';
import axios from 'axios';


const Tecnology: React.FC = () => {
    //window.menuController = menuController;

    return (
        <IonPage >
            <IonHeader >
                
                <IonToolbar>
                    <IonButtons color="dark" slot="start">
                        <IonBackButton color="dark" text="" icon="add" />
                        <IonTitle>Tecnología</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={cel1}></IonImg>
                        <IonCardTitle>Celular LG K11</IonCardTitle>
                        <IonCardSubtitle>800$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Banda abierta
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={cel2}></IonImg>
                        <IonCardTitle>Galaxy A20</IonCardTitle>
                        <IonCardSubtitle>650$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Sin descripción
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={cel3}></IonImg>
                        <IonCardTitle>Celular vivo Y50 128GB</IonCardTitle>
                        <IonCardSubtitle>550$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Sin descripción
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={lap1}></IonImg>
                        <IonCardTitle>Laptop HP 13.3</IonCardTitle>
                        <IonCardSubtitle>1100$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                    Delgada y ligera Laptop HP Pavilion de 13.3" de pantalla y peso 1.3Kg
                    </IonCardContent>
                </IonCard>
            </IonContent>


        </IonPage>
    );
};

export default Tecnology;
