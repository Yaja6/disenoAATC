import { IonButtons, IonModal, IonBackButton, IonContent, IonList, IonCheckbox, IonFooter, IonCol, IonRow, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React, { useState } from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './style.css';


const Register: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonPage >
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons  slot="start">
                        <IonBackButton  text="" icon="add" defaultHref="/Home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <p>This is modal content</p>
                    <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>

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
                        <IonLabel position="floating">Dirección: </IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Contraseña</IonLabel>
                        <IonInput type="password" />
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>Rrecordarme</IonLabel>
                        <IonCheckbox defaultChecked={true} slot="start" />
                    </IonItem>
                    <IonButton className="ion-margin-top" routerLink="/WelcomeSeller" expand="block">
                        Registrarme
                     </IonButton>
                </form>


            </IonContent>




        </IonPage>
    );
};

export default Register;
