import React from 'react';
import { Link } from 'react-router-dom';

function Charts() {
  return (
    <div>
      <h1>图表列表</h1>
      <ul>
        <li><Link to="/line">折线图/面积图</Link></li>
        <li><Link to="/bar">柱状/条形图</Link></li>
        <li><Link to="/pie">饼图</Link></li>
        <li><Link to="/scatter">散点图</Link></li>
        <li><Link to="/radar">雷达图</Link></li>
        <li><Link to="/tree">树图</Link></li>
        <li><Link to="/treemap">矩形树图</Link></li>
        <li><Link to="/sunburst">旭日图</Link></li>
        <li><Link to="/boxplot">箱线图</Link></li>
        <li><Link to="/candlestick">K线图</Link></li>
        <li><Link to="/heatmap">热力图</Link></li>
        <li><Link to="/map">地图</Link></li>
        <li><Link to="/graph">关系图</Link></li>
      </ul>
    </div>
  );
}

export default Charts;
