import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import LoginPage from './components/login/LoginPage'
import Clienttask from "./components/ClientComponent/Clienttask";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" component={Clienttask} exact />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
