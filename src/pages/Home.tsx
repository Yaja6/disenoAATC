import { IonContent, IonList,IonFooter,IonCol,IonRow,IonIcon, IonItem, IonItemDivider, IonButton, IonHeader, IonPage, IonLabel, IonToolbar, IonImg, IonInput } from '@ionic/react';
import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import imgLogo from "../images/logo4.png";
import llave from "../images/llave.png";
import registrar from "../images/registrarse.svg";
import tienda from "../images/compras.svg";

const Home: React.FC = () => {
  return (
    <IonPage className="m">
      <IonHeader className="ion-no-border">
        <IonImg class="i1 "src={imgLogo} alt="logo" />
      </IonHeader>
      <IonContent fullscreen>
        

        <IonItemDivider class="m">
        
          <IonLabel >
          <p id="l1">¿Qué deseas hacer?</p><br/>
            <IonButton class="b1"  expand="block" routerLink="/Login"><IonImg src={llave}></IonImg>Iniciar Sesión</IonButton><br/>
            <IonButton class="b2"  expand="block" routerLink="/Products"><IonImg class="i2" src={registrar}></IonImg>Comprar Productos</IonButton><br/>
            <IonButton class="b2"  expand="block" routerLink="/Register"><IonImg  src={tienda}></IonImg>Vender productos</IonButton>

          </IonLabel>
        </IonItemDivider>

      </IonContent>
     
    </IonPage>
  );
};

export default Home;
