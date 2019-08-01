import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';

import Login from '../pages/user/Login';
import Regist from '../pages/user/Regist';

// 图表
import Line from '../pages/charts/Line';
import Bar from '../pages/charts/Bar';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/regist" component={Regist} />
      <Route path="/line" component={Line} />
      <Route path="/bar" component={Bar} />
      <Route component={Error404} />
    </Switch>
  </Router>
);
