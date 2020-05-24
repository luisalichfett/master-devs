import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './core/constants/routes';
import './App.css';
import Login from './modules/Login';

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from={routes.main} to={routes.login} />
        <Route path={routes.login} component={Login} />
    </Switch>
  </Router>
)

export default App;
