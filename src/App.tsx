import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButton,
  IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircle, home, people, person, settings } from 'ionicons/icons';
import Login from './components/Login';
import ProtectedRoute from './routes/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Community from './pages/Community';
import Settings from './pages/Settings';
import Modal from './components/Modal';

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
import UserLogin from './pages/UserLogin';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUserAuth, setIsUserAuth] = React.useState(false);
  console.log(isUserAuth)
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/login">
              {isUserAuth ? <Redirect to="/dashboard" /> :  <UserLogin setIsUserAuth={setIsUserAuth}/>}
            </Route>
            {/* <Route exact path="/register">
              {isUserAuth ? <Redirect to="/dashboard" /> :  <Register setIsUserAuth={setIsUserAuth}/>}
            </Route> */}
            <ProtectedRoute isUserAuth={isUserAuth} exact path="/dashboard" component={Dashboard}/>
            <ProtectedRoute isUserAuth={isUserAuth} exact path="/profile" component={Profile}/>
            <ProtectedRoute isUserAuth={isUserAuth} exact path="/community" component={Community}/>
            <ProtectedRoute isUserAuth={isUserAuth} exact path="/settings">
              <Settings setIsUserAuth={setIsUserAuth}/>
            </ProtectedRoute>
            {/* <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>*/}
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </IonRouterOutlet>
          {isUserAuth ? (
            <IonTabBar slot="bottom">
              <IonTabButton tab="Dashboard" href="/dashboard">
                <IonIcon icon={home} />
                <IonLabel>Dashboard</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Profile" href="/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
              <IonTabButton tab="modal">
                <IonButton
                  id="open-modal"
                  expand="block"
                  onClick={() => setIsOpen(true)}>
                  <IonIcon icon={addCircle} />
                </IonButton>
              </IonTabButton>
              <IonTabButton tab="Community" href="/community">
                <IonIcon icon={people} />
                <IonLabel>Community</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Settings" href="/settings">
                <IonIcon icon={settings} />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          ) : (
            <IonTabBar></IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
      <Modal open={isOpen} setOpen={setIsOpen} />
    </IonApp>
  );
};

export default App;
