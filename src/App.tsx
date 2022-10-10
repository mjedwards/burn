import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonModal,
  IonButton,
  IonContent,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addCircle, home, people, person, settings } from "ionicons/icons";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Settings from "./pages/Settings";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/dashboard">
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
          </Route>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        </IonRouterOutlet>
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
            <IonIcon icon={addCircle} />
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
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
