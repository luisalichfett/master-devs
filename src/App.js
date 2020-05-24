import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './core/constants/routes';
import './App.css';
import Login from './modules/Login';
import Teste from './modules/Teste';

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from={routes.main} to={routes.test} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.test} component={Teste} />
    </Switch>
  </Router>
)

export default App;
