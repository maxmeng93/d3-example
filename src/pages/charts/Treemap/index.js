import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from "d3";

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.renderChart();
  }

  renderChart() {
    console.log(d3);
  }

  render() {
    return (
      <div id="treemap" className="content">
        <span><Link to="/">Home</Link></span>
        <h1>矩形树图</h1>
        <div ref="chart-wrap" />
      </div>
    );
  }
}

export default Line;
