import React from 'react';
import { Link } from 'react-router-dom';
// import * as d3 from 'd3';

class Line extends React.Component {
  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>关系图</h1>
      </div>
    );
  }
}

export default Line;
