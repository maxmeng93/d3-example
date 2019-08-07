import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import treeData from './data.json';

class Line extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData() {
    this.renderChart(treeData);
  }

  renderChart(data) {
    const width = 1000;
    const height = 900;
    const chartWrap = d3.select(this.refs['chart-wrap']);
    const svg = chartWrap.append('svg')
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('width', width)
      .style('height', height);

    const list = [];

    // 每一环有多少条数据
    const length = 51;
    // 角度：渲染每环名称的角度
    const angle = 20;

    for (let i = 0; i < 5; i++) {
      list.push([]);
      for (let x = 0; x < length; x++) {
        list[i].push({
          name: '样品' + (i+1),
          breadth:1,
          value: 1
        });
      }
      // 20°占用几份
      const breadth = (angle * length) / (360 - angle) ;
      list[i].push({
        name:'样品组' + (i+1),
        breadth: breadth,
        value: 0
      });
    }

    renderRing(list);
    renderTree(data);

    // 渲染树图外围的环
    function renderRing(list) {
      list.forEach((data, i) => {
        const thickness = 12;
        const min = Math.min(width, height) / 2;
        const innerRadius = min - (thickness * (i + 1));
        const outerRadius = min - (thickness * i);
        let arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);

        // D3提供的6种单色调颜色方案
        const colorScheme = ['interpolateBlues', 'interpolateGreens', 'interpolateGreys', 'interpolateOranges', 'interpolatePurples', 'interpolateReds'];
        let color = d3.scaleQuantize()
          .domain([0,1])
          .range(d3.quantize(t => d3[colorScheme[i%colorScheme.length]](t * 0.8 + 0.1), data.length).reverse());

        const pie = d3.pie()
          .sort(null)
          .value(d => d.breadth);

        const arcs = pie(data);

        svg.append('g')
            .attr('stroke', 'white')
          .selectAll('path')
          .data(arcs)
          .join('path')
            .attr('fill', d => {
              if (d.data.value) {
                return color(Math.random());
              } else {
                return '#fff';
              }
            })
            .attr('d', arc)
          .append('title')
            .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

        svg.append('g')
            .attr('font-family', 'sans-serif')
            .attr('font-size', 10)
            .attr('text-anchor', 'middle')
          .selectAll('text')
          .data(arcs)
          .join('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .call(text => text.append('tspan'))
              .text(d => { if (d.data.value === 0) return d.data.name; });
      });
    }

    // 渲染树图
    function renderTree(data) {
      // 外半径
      var outerRadius = width / 2;
      // 内半径
      var innerRadius = outerRadius - 170;

      let legend = svg => {
        const g = svg
          .selectAll("g")
          .data(color.domain())
          .join("g")
          .attr("transform", (d, i) => `translate(${-outerRadius},${-outerRadius + i * 20 + 50})`);

        g.append("rect")
          .attr("width", 18)
          .attr("height", 18)
          .attr("fill", color);

        g.append("text")
          .attr("x", 24)
          .attr("y", 9)
          .attr("dy", "0.35em")
          .text(d => d);
      }

      /**
       * 连接2个点
       * @param {*} startAngle 开始角度
       * @param {*} startRadius 开始半径
       * @param {*} endAngle 结束角度
       * @param {*} endRadius 结束半径
       */
      function linkStep(startAngle, startRadius, endAngle, endRadius) {
        const c0 = Math.cos(startAngle = (startAngle - 90) / 180 * Math.PI);
        const s0 = Math.sin(startAngle);
        const c1 = Math.cos(endAngle = (endAngle - 90) / 180 * Math.PI);
        const s1 = Math.sin(endAngle);
        return "M" + startRadius * c0 + "," + startRadius * s0 +
          (endAngle === startAngle ? "" : "A" + startRadius + "," + startRadius + " 0 0 " + (endAngle > startAngle ? 1 : 0) + " " + startRadius * c1 + "," + startRadius * s1) +
          "L" + endRadius * c1 + "," + endRadius * s1;
      }

      function linkConstant(d) {
        return linkStep(d.source.x, d.source.y, d.target.x, d.target.y);
      }

      // 通过递归继承设置每个节点的颜色。
      function setColor(d) {
        var name = d.data.name;
        d.color = color.domain().indexOf(name) >= 0 ? color(name) : d.parent ? d.parent.color : null;
        if (d.children) d.children.forEach(setColor);
      }

      // 通过递归求和和缩放到根的距离来设置每个节点的半径。
      function setRadius(d, y0, k) {
        d.radius = (y0 += d.data.length) * k;
        if (d.children) d.children.forEach(d => setRadius(d, y0, k));
      }

      // 计算树中任意节点的最大累积长度
      function maxLength(d) {
        return d.data.length + (d.children ? d3.max(d.children, maxLength) : 0);
      }

      // 颜色
      let color = d3.scaleOrdinal()
        .domain(["Bacillaceae", "Listeriaceae", "Paenibacillaceae", "Staphylococcaceae"])
        .range(d3.schemeCategory10);

      // 集群
      const cluster = d3.cluster()
        .size([360 - angle, innerRadius])
        .separation((a, b) => 1);

      const root = d3.hierarchy(data, d => d.branchset)
        .sum(d => d.branchset ? 0 : 1)
        .sort((a, b) => (a.value - b.value) || d3.ascending(a.data.length, b.data.length));

      cluster(root);
      setRadius(root, root.data.length = 0, innerRadius / maxLength(root));
      setColor(root);

      // 设置左上角标注
      svg.append("g").call(legend);

      const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .selectAll("path")
        .data(root.links())
        .join("path")
        .each(function (d) {
          d.target.linkNode = this;
        })
        .attr("d", linkConstant)
        .attr("stroke", d => d.target.color);

      // 渲染每个分支的名称
      // svg.append("g")
      //   .selectAll("text")
      //   .data(root.leaves())
      //   .join("text")
      //   .attr("dy", ".31em")
      //   .attr("transform", d => `rotate(${d.x - 90}) translate(${innerRadius + 4},0)${d.x < 180 ? "" : " rotate(180)"}`)
      //   .attr("text-anchor", d => d.x < 180 ? "start" : "end")
      //   .text(d => d.data.name.replace(/_/g, " "));
    }
  }

  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>分类和系统发育信息可视化图</h1>
        <div ref="chart-wrap"></div>
      </div>
    );
  }
}

export default Line;
