import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Missions from './Missions';
import Profile from './Profile';
import Rockets from './Rockets';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/Missions">
        <Missions />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
    </Switch>
  </div>
);

export default App;
