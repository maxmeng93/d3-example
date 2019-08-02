import React from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";

import Markdonw from "@/components/Markdonw";

import md from "./index.md";
import "./index.scss";

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

    fetch(md)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  renderChart(data) {
    const chartWrap = d3.select(this.refs['chart-wrap']);
    var superscript = '0123456789',
      formatPower = function(d) {
        return (d + "")
          .split("")
          .map(function(c) {
            return superscript[c];
          })
          .join("");
      };

    var margin = { top: 40.5, right: 40.5, bottom: 50.5, left: 60.5 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);

    var y = d3.scaleLog()
      .base(Math.E)
      .domain([Math.exp(0), Math.exp(9)])
      .range([height, 0]);

    var xAxis = d3.axisBottom()
      .scale(x);

    var yAxis = d3.axisLeft()
      .scale(y)
      .tickFormat(function(d) {
        return "e" + formatPower(Math.round(Math.log(d)));
      });

    var line = d3.line()
      .x(function(d) {
        return x(d[0]);
      })
      .y(function(d) {
        return y(d[1]);
      });

    var svg = chartWrap
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .append("g")
      .attr("class", "axis axis--y")
      .attr("transform", "translate(-10,0)")
      .call(yAxis);

    svg
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + (height + 10) + ")")
      .call(xAxis);

    svg
      .append("path")
      .datum(
        d3.range(100).map(function(x) {
          return [x, x * x + x + 1];
        })
      )
      .attr("class", "line")
      .attr("d", line);
  }

  render() {
    return (
      <div id="line" className="content">
        <span>
          <Link to="/">Home</Link>
        </span>
        <h1>折线图</h1>
        <div ref="chart-wrap" />
        <Markdonw markdown={this.state.markdown} />
      </div>
    );
  }
}

export default Line;
