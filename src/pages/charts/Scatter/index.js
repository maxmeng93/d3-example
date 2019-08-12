import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import cars from './cars.csv';

class Line extends React.Component {
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = Object.assign(
      await d3.csv(cars, ({Name: name, Miles_per_Gallon: x, Horsepower: y}) => ({name, x: +x, y: +y})),
      {x: "Miles per Gallon", y: "Horsepower"}
    );
    this.renderChart(data);
  }

  renderChart(data) {
    // console.log(data);
    const chartWrap = d3.select(this.refs['chart-wrap']);
    const width = 1000;
    const height = 600;
    const margin = {top:20, right:30, bottom:30, left:40};

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x)).nice()
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.y)).nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .call(g => g.select('.domain').remove())
      .call(g => g.append('text')
        .attr('x', width - margin.right)
        .attr('y', -4)
        .attr('fill', '#000')
        .attr('font-weight', 'bold')
        .attr('text-achor', 'end')
        .text(data.x));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove())
      .call(g => g.select('.tick:last-of-type text').clone()
        .attr('x', 4)
        .attr('text-anchor', 'start')
        .attr('font-weight', 'bold')
        .text(data.y));

    var svg = chartWrap.append('svg')
      .attr('viewBox', [0, 0, width, height])
      .property('value', []);

    var brush = d3.brush()
      .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]])
      .on('start brush end', brushed);

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    const dot = svg.append('g')
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
      .selectAll('g')
      .data(data)
      .join('circle')
        .attr('transform', d => `translate(${x(d.x)},${y(d.y)})`)
        .attr('r', 3);
    // console.log(dot);
    svg.call(brush).style('touch-action', 'none');

    function brushed() {
      let value = [];
      d3.event.sourceEvent.preventDefault();
      if (d3.event.selection) {
        const [[x0, y0], [x1, y1]] = d3.event.selection;
        value = data.filter(d => x0 <= x(d.x) && x(d.x) < x1 && y0 <= y(d.y) && y(d.y) < y1);
      }
      svg.property("value", value).dispatch("input");
    }
  }

  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>散点图</h1>
        <div ref="chart-wrap"></div>
      </div>
    );
  }
}

export default Line;
