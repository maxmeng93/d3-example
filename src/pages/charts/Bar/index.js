import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import Markdonw from '@/components/Markdonw';

import md from './index.md';
import csv from './index.csv';
import './index.css';

class Bar extends React.Component {
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

  // 渲染图形
  renderChart(data) {
    var year;
    var buttonYears = [];
    var popData = data.filter(d => {
      if (!year) year = d.year;
      if (buttonYears.indexOf(d.year) === -1) {
        buttonYears.push(d.year);
      }
      return d.year === year;
    });

    var margin = {top:30, right:0, bottom:0, left:100};
    var width = 500 - margin.left - margin.right;
    var height = 450 - margin.top - margin.bottom;

    // 数据键值
    function keys(d) {
      return d.age;
    }

    // 更新图形 chart
    function update(updateYear) {
      d3.select('.selected')
        .classed('selected', false);
      buttons.filter(d => d === updateYear)
        .classed('selected', true);

      popData = data.filter(e => e.year === updateYear);
      bars.data(popData, keys)
        .transition()
        // .delay(500) // 动画延时
        // .duration(500) // 动画持续时间
        // .ease(d3.easeBounce)
        .attr('width', d => x(d.value))
    }

    var x = d3.scaleLinear()
      .domain([0, d3.max(data, function(d){ return d.value; })])
      .range([0, width]);

    var y = d3.scaleBand()
      .domain(popData.map(function(d){ return d.age; }))
      .range([0, height])
      .paddingInner(0.25);

    const chartWrap = d3.select(this.refs['chart-wrap']);

    chartWrap.append('h2')
      .text('Age distribution of the world, ' + year);

    var playInterval;
    chartWrap.append('div')
      .attr('class', 'play-button')
      .text('▶ PLAY ALL YEARS')
      .on('click', function() {
        var i = 0;

        playInterval = setInterval(function() {
          update(buttonYears[i]);
          i++;
          if (i > buttonYears.length - 1) {
            clearInterval(playInterval);
          }
        }, 1000);
      });

    var buttons = chartWrap.append('div')
      .attr('class', 'buttons-container')
      .selectAll('div')
      .data(buttonYears)
      .enter()
      .append('div')
      .text(e => e)
      .attr('class', function(d){
        if (d === year) {
          return 'selected';
        } else {
          return '';
        }
      })
      .on('click', function(d){
        update(d);
        clearInterval(playInterval);
      });

    chartWrap.append('div')
      .attr('class', 'top-label age-label')
      .append('p')
      .text('age group');

    chartWrap.append('div')
      .attr('class', 'top-label')
      .text('portion of the population');

    chartWrap.append('div')
      .attr('class', 'clearfix');

    var svg = chartWrap.append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate('+ margin.left + ',' + margin.top +')');

    var barGroup = svg.append('g')
      .attr('class', 'bar');

    var bars = barGroup.selectAll('rect')
      .data(popData, keys)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', function(d){ return y(d.age); })
      .attr('width', function(d){ return x(d.value); })
      .attr('height', y.bandwidth());

    var xAxis = d3.axisTop()
      .scale(x)
      .ticks(5, '%');

    svg.append('g')
      .call(xAxis);

    var yAxis = d3.axisLeft()
      .scale(y);

    svg.append('g')
      .call(yAxis);
  }

  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>柱状图</h1>
        <div ref="chart-wrap"></div>
        <Markdonw markdown={this.state.markdown}></Markdonw>
      </div>
    );
  }
}

export default Bar;
