import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Error404 from "@/pages/Error404";

// 图表
import Line from "@/pages/charts/Line";
import Bar from "@/pages/charts/Bar";
import Pie from "@/pages/charts/Pie";
import Scatter from "@/pages/charts/Scatter";
import Tree from "@/pages/charts/Tree";
import Treemap from "@/pages/charts/Treemap";
import Sunburst from "@/pages/charts/Sunburst";
import Boxplot from "@/pages/charts/Boxplot";
import Candlestick from "@/pages/charts/Candlestick";
import Heatmap from "@/pages/charts/Heatmap";
import Maps from "@/pages/charts/Map";
import Graph from "@/pages/charts/Graph";
import TreeOfLife from "@/pages/charts/TreeOfLife";
import TaxonomicTree from "@/pages/charts/TaxonomicTree";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/line", Component: Line },
  { path: "/bar", Component: Bar },
  { path: "/pie", Component: Pie },
  { path: "/scatter", Component: Scatter },
  { path: "/tree", Component: Tree },
  { path: "/treemap", Component: Treemap },
  { path: "/sunburst", Component: Sunburst },
  { path: "/boxplot", Component: Boxplot },
  { path: "/candlestick", Component: Candlestick },
  { path: "/heatmap", Component: Heatmap },
  { path: "/map", Component: Maps },
  { path: "/graph", Component: Graph },
  { path: "/tree_of_life", Component: TreeOfLife },
  { path: "/taxonomic_tree", Component: TaxonomicTree },
  { Component: Error404 },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
