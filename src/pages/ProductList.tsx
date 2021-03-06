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
import alcohol from '../images/alcohol.jpg';
import escoba from '../images/escoba.webp';
import trapeador from '../images/trape.jpg';
import cloro from '../images/cloro.webp';
import axios from 'axios';


const ProductList: React.FC = () => {
    //window.menuController = menuController;

    return (
        <IonPage >
            <IonHeader >
                
                <IonToolbar>
                    <IonButtons color="dark" slot="start">
                        <IonBackButton color="dark" text="" icon="add" />
                        <IonTitle>Limpieza</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={cloro}></IonImg>
                        <IonCardTitle>Cloro</IonCardTitle>
                        <IonCardSubtitle>2U x 14$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        sin descripción
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={alcohol}></IonImg>
                        <IonCardTitle>Alcohol</IonCardTitle>
                        <IonCardSubtitle>6$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Alcohol para uso casero
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={escoba}></IonImg>
                        <IonCardTitle>Escoba</IonCardTitle>
                        <IonCardSubtitle>5$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Escobas diferentes colores
                    </IonCardContent>
                </IonCard>
                <IonCard class="c1">
                    <IonCardHeader>
                        <IonImg src={trapeador}></IonImg>
                        <IonCardTitle>Trapeador</IonCardTitle>
                        <IonCardSubtitle>6$</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        sin descripción
                    </IonCardContent>
                </IonCard>
            </IonContent>


        </IonPage>
    );
};

export default ProductList;
