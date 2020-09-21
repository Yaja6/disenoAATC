import { IonButtons, IonCardContent, IonTitle, IonMenu, IonCard, IonIcon, IonBackButton, IonContent, IonList, IonCheckbox, IonFooter, IonCol, IonRow, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './style.css';
import p1 from '../images/repartidor.jpg';

    
const Products: React.FC = () => {
    //window.menuController = menuController;
    
    return (
        <IonPage >
            <IonHeader className="ion-no-border" >
                <IonToolbar >
                    <IonButtons color="dark" slot="start">
                        <IonBackButton color="dark" text="" icon="add" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
<IonTitle class="hd1">Lista de productos</IonTitle>
                <IonMenu side="start" menuId="first">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonTitle>Start Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>
                            <IonItem>Menu Item</IonItem>
                            <IonItem>Menu Item</IonItem>
                            <IonItem>Menu Item</IonItem>
                            <IonItem>Menu Item</IonItem>
                            <IonItem>Menu Item</IonItem>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <IonCard>
                    <IonItem href="#" className="ion-activated">
                        <IonIcon icon={wifi} slot="start" />
                        <IonLabel>Card Link Item 1 activated</IonLabel>
                    </IonItem>

                    <IonItem href="#">
                        <IonIcon icon={wine} slot="start" />
                        <IonLabel>Card Link Item 2</IonLabel>
                    </IonItem>

                    <IonItem className="ion-activated">
                        <IonIcon icon={warning} slot="start" />
                        <IonLabel>Card Button Item 1 activated</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={walk} slot="start" />
                        <IonLabel>Card Button Item 2</IonLabel>
                    </IonItem>
                    <IonButton color="light">Agregar</IonButton>
                </IonCard>


            </IonContent>


        </IonPage>
    );
};

export default Products;
