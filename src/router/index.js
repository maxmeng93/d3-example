import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';

import Login from '../pages/user/Login';
import Regist from '../pages/user/Regist';

// 图表
import Line from '../pages/charts/Line';
import Bar from '../pages/charts/Bar';
import Pie from '../pages/charts/Pie';
import Scatter from '../pages/charts/Scatter';
import Radar from '../pages/charts/Radar';
import Tree from '../pages/charts/Tree';
import Treemap from '../pages/charts/Treemap';
import Sunburst from '../pages/charts/Sunburst';
import Boxplot from '../pages/charts/Boxplot';
import Candlestick from '../pages/charts/Candlestick';
import Heatmap from '../pages/charts/Heatmap';
import Maps from '../pages/charts/Map';
import Graph from '../pages/charts/Graph';
import TreeOfLife from '../pages/charts/TreeOfLife';
import TaxonomicTree from '../pages/charts/TaxonomicTree';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/regist" component={Regist} />
      <Route path="/line" component={Line} />
      <Route path="/bar" component={Bar} />
      <Route path="/pie" component={Pie} />
      <Route path="/scatter" component={Scatter} />
      <Route path="/radar" component={Radar} />
      <Route path="/tree" component={Tree} />
      <Route path="/treemap" component={Treemap} />
      <Route path="/sunburst" component={Sunburst} />
      <Route path="/boxplot" component={Boxplot} />
      <Route path="/candlestick" component={Candlestick} />
      <Route path="/heatmap" component={Heatmap} />
      <Route path="/map" component={Maps} />
      <Route path="/graph" component={Graph} />
      <Route path="/tree_of_life" component={TreeOfLife} />
      <Route path="/taxonomic_tree" component={TaxonomicTree} />
      <Route component={Error404} />
    </Switch>
  </Router>
);
