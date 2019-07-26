import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';
// 图表
import Bar from '../pages/charts/Bar';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bar" component={Bar} />
      <Route path="/login" component={Login} />
      <Route component={Error404} />
    </Switch>
  </Router>
);
