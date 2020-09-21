import { IonButtons, IonBackButton, IonContent, IonList, IonAlert, IonFooter, IonCol, IonRow, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import './style.css';
const RegDealer: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);
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


                <form className="ion-padding" >
                    <IonItem>
                        <IonLabel position="floating">Nombre:</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Apellido:</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">E-mail</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Teléfono: </IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonButton class="b3" onClick={() => setShowAlert1(true)} className="ion-margin-top" type="submit" expand="block">
                        Añadir repartidor
                     </IonButton>
                </form>
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={'Alert'}
                    subHeader={'Subtitle'}
                    message={'This is an alert message.'}
                    buttons={['OK']}
                />

            </IonContent>

        </IonPage>
    );
};

export default RegDealer;
