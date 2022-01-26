import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Space-header";
import Missions from "./components/Space-missions";
import Profiles from "./components/Space-profiles";
import Rockets from "./components/Space-rockets";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Rockets} />{" "}
      <Route path="/missions" component={Missions} />{" "}
      <Route path="/my-profile" component={Profiles} />{" "}
    </Switch>{" "}
  </Router>
);

export default App;
