import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import Markdonw from "@/components/Markdonw";

import md from "./index.md";
import dataURL from './life.txt';
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
    // this.renderChart();
    fetch(dataURL)
      .then(res => res.text())
      .then(text => this.renderChart(text));

    fetch(md)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  renderChart(data) {
    data = parseNewick(data);
    console.log(data);
    console.log(d3);
    const chartWrap = d3.select(this.refs['chart-wrap']);
    const width = 1000;
    const height = 500;
    const outerRadius = width / 2;
    const innerRadius = outerRadius - 170;
    const svg = chartWrap.append('svg')



    /* eslint-disable */
    // 解析 Newick 格式数据
    // https://github.com/jasondavies/newick.js
    function parseNewick(a){for(var e=[],r={},s=a.split(/\s*(;|\(|\)|,|:)\s*/),t=0;t<s.length;t++){var n=s[t];switch(n){case"(":var c={};r.branchset=[c],e.push(r),r=c;break;case",":var c={};e[e.length-1].branchset.push(c),r=c;break;case")":r=e.pop();break;case":":break;default:var h=s[t-1];")"==h||"("==h||","==h?r.name=n:":"==h&&(r.length=parseFloat(n))}}return r}
  }

  render() {
    return (
      <div id="treeOfLife" className="content">
        <span><Link to="/">Home</Link></span>
        <h1>环形进化树图</h1>
        <div ref="chart-wrap" />
        <Markdonw markdown={this.state.markdown} />
      </div>
    );
  }
}

export default Line;
