import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Principal/Inicio";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import './App.css';
import "./bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Inicio></Inicio>
      </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
