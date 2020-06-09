import React from "react";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import ProviderPage from "./Pages/providerPage";
import ClientPage from "./Pages/clientPage";
import ProviderTasks from "./Pages/tasksOfProvider";
import HomePage from "./Pages/homePage";
import "./App.css";

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
=======
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginPage from './components/login/LoginPage'
import HomePage from './components/home/HomePage'
import RegisterPage from './components/register/RegisterPage'
import Clienttask from "./components/ClientComponent/Clienttask";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/" component={Clienttask} exact />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
>>>>>>> 31309325a0d98764e8f04cecc2d943f9c9d34176
  );
}

export default App;
