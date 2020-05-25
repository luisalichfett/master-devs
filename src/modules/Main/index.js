import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from '../../core/constants/routes';
import './index.css';
import Login from '../Login';

const Main = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from={routes.main} to={routes.login} />
          <Route path={routes.login} component={Login} />
      </Switch>
    </Router>
  </div>
)

export default Main;
