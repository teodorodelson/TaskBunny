import React from "react";
import { Switch, Route } from "react-router-dom";
import ProviderPage from "./Pages/providerPage";
import ClientPage from "./Pages/clientPage";
import ProviderTasks from "./Pages/tasksOfProvider";
import HomePage from "./Pages/homePage";

function App() {
  return (
    <Switch>
      <Route path="/provider page">
        <ProviderPage />
      </Route>
      <Route path="/client page">
        <ClientPage />
      </Route>
      <Route path="/provider tasks">
        <ProviderTasks />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
