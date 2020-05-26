import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import routes from 'core/constants/routes';
import './index.css';
import Login from 'modules/Login';
import Game from 'modules/Game';
import Teste from 'modules/Teste';

const Main = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from={routes.main} to={routes.login} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.game} component={Game} />
        <Route path={routes.test} component={Teste} />
      </Switch>
    </Router>
  </div>
);

export default Main;
