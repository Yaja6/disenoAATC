import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegProduct from './pages/RegProduct';
import RegDealer from './pages/RegDealer';
import Products from './pages/Products';
import WelcomeSeller from './pages/WelcomeSeller';
import Categories from './pages/Categories';
import ProductList from './pages/ProductList';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/login" component={Login} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/register" component={Register} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/register" />} />
        <Route path="/regproduct" component={RegProduct} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/regproduct" />} />
        <Route path="/regdealer" component={RegDealer} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/regdealer" />} />
        <Route path="/products" component={Products} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/products" />} />
        <Route path="/welcomeseller" component={WelcomeSeller} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/welcomeseller" />} />
        <Route path="/categories" component={Categories} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/categories" />} />
        <Route path="/productlist" component={ProductList} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/productlist" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
