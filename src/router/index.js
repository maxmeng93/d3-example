import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

import Login from '../pages/user/Login';
import Regist from '../pages/user/Regist';

// 图表
import Line from '../pages/charts/Line';
import Bar from '../pages/charts/Bar';
import Pie from '../pages/charts/Pie';
import Scatter from '../pages/charts/Scatter';
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

const router = createBrowserRouter([
  { path: '/', element: Home },
  { path: '/login', element: Login },
  { path: '/regist', element: Regist },
  { path: '/line', element: Line },
  { path: '/bar', element: Bar },
  { path: '/pie', element: Pie },
  { path: '/scatter', element: Scatter },
  { path: '/tree', element: Tree },
  { path: '/treemap', element: Treemap },
  { path: '/sunburst', element: Sunburst },
  { path: '/boxplot', element: Boxplot },
  { path: '/candlestick', element: Candlestick },
  { path: '/heatmap', element: Heatmap },
  { path: '/map', element: Maps },
  { path: '/graph', element: Graph },
  { path: '/tree_of_life', element: TreeOfLife },
  { path: '/taxonomic_tree', element: TaxonomicTree },
  { element: Error404 },
]);

export default router;
