import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Footer from "./Component/footer/Footer";
import AppOne from "./AppOne";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AppTwo from "./AppTwo";
import AppThree from "./AppThree";
import { ToastContainer } from "react-toastify";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500);
  }, []);
  return spinner ? (
    <div className="loadingPage">
      {" "}
      <div data-text="loading...">loading...</div>{" "}
    </div>
  ) : (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" component={AppTwo} />
          <Route exact path="/mint" component={AppOne} />
          <Route exact path="/claim" component={AppThree} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
