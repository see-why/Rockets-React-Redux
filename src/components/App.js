import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFromServer } from '../redux/rockets/rockets';
import Header from './Header';
import Missions from './Missions';
import Profile from './Profile';
import Rockets from './Rockets';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromServer());
  }, []);

  return (
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
};

export default App;
