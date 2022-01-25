import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewSignIn from "./components/Signin/NewSignIn";
import Home from "./components/Layout/Home";
import Trailer from "./components/Movie/Trailer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/Movies" component={Home} exact></Route>
        <Route path="/newUser" component={NewSignIn}></Route>
        <Route path="/trailer" component={Trailer}></Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
