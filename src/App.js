import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Space-header';
import Profiles from './components/Space-profiles';
import Rockets from './components/Space-rockets';
import Missions from './components/Space-missions';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Rockets} />
      {' '}
      <Route path="/my-profile" component={Profiles} />
      {' '}
      <Route path="/missions" component={Missions} />
      {' '}
    </Switch>
    {' '}
  </Router>
);

export default App;
