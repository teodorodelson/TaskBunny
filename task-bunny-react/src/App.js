import React from "react";
import { Switch, Route } from "react-router-dom";
import ProviderPage from "./Pages/providerPage";
import ClientPage from "./Pages/clientPage";
import ProviderTasks from "./Pages/tasksOfProvider";
import "./App.css";

import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import RegisterPage from "./components/register/RegisterPage";
import Clienttask from "./components/ClientComponent/Clienttask";
import ClientTaskPage from "./components/ClientComponent/ClientTaskPage";
import ClientFeedback from "./components/ClientComponent/ClientFeedback";

function App() {
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/home" component={HomePage} />
      <Route path="/register" component={RegisterPage} />

      <Route path="/provider page">
        <ProviderPage />
      </Route>
      <Route path="/client page">
        <ClientPage />
      </Route>
      <Route path="/provider tasks">
        <ProviderTasks />
      </Route>
      <Route path="/createtask" component={Clienttask} />
      <Route path="/viewtask" component={ClientTaskPage} />
      <Route path="/clientfeedback" component={ClientFeedback} />
    </Switch>
  );
}

export default App;
