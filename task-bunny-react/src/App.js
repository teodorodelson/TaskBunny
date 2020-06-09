import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from './components/login/LoginPage'
import HomePage from './components/home/HomePage'
import RegisterPage from './components/register/RegisterPage'

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
  );
}

export default App;
