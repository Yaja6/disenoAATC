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
import p1 from '../images/repartidor.jpg';


const ProductList: React.FC = () => {
    //window.menuController = menuController;

    return (
        <IonPage >
            <IonHeader class="hd1">
                <IonToolbar>
                    <IonButtons color="dark" slot="start">
                        <IonBackButton color="dark" text="" icon="add" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>

                    </IonCardHeader>

                    <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                </IonCard>

            </IonContent>


        </IonPage>
    );
};

export default ProductList;
