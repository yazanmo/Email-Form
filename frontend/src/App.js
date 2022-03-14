import React, { useState} from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Login from "./components/login/login";
import Signup from "./components/signUp/signUp"
import Data from "./components/data/Data";


const App = () => {
  
  return (
    <>
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Signup
              />
            )}
          />         
          <Route exact path="/login" render={() => <Login/>} />
          <Route exact path="/data" render={() => <Data/>} />
          

        </Switch>
      </div>
    </>
  );
};

export default App;
