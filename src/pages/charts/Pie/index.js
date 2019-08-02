import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import Markdonw from '@/components/Markdonw';

import md from './index.md';
import csv from './population-by-age.csv';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    d3.csv(csv).then(data => this.renderChart(data));

    fetch(md)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  renderChart(data) {
    const chartWrap = d3.select(this.refs['chart-wrap']);
    const width = 975;
    const height = 500;
    const radius = Math.min(width, height) / 2 * 0.8;

    let pie = d3.pie()
      .sort(null)
      .value(d => d.value);

    let arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(Math.min(width, height) / 2 - 1);

    let color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

    const arcs = pie(data);
    const svg = chartWrap.append('svg').attr('viewBox', [-width / 2, -height / 2, width, height]);
    svg.append('g')
        .attr('stroke', 'white')
      .selectAll('path')
      .data(arcs)
      .join('path')
        .attr('fill', d => color(d.data.name))
        .attr('d', arc)
      .append('title')
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    svg.append('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 12)
        .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(arcs)
      .join('text')
        .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
        .call(text => text.append('tspan'))
          .attr('y', '-0.4em')
          .attr('font-weight', 'bold')
          .text(d => d.data.name)
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append('tspan')
          .attr('x', 0)
          .attr('y', '0.7em')
          .attr('fill-opacity', '0.7')
          .text(d => d.data.value.toLocaleString()));
  }

  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>饼图</h1>
        <div ref="chart-wrap"></div>
        <Markdonw markdown={this.state.markdown}></Markdonw>
      </div>
    );
  }
}

export default Line;
