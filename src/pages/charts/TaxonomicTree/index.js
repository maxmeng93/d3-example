import React from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

class Line extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData() {
    const res = {
      setting: { // annot_0.txt 全局参数
        clade_separation: 0.5,
        branch_thickness: 1.5,
        branch_bracket_depth: 0.8,
        branch_bracket_width: 0.25,
        clade_marker_size: 40,
        clade_marker_edge_color: '#555555',
        clade_marker_edge_width: 1.2
      },
      tree: { // 根据 annot_1.txt  annot_2.txt guide.txt 生成
        annotation: '', // 名称
        annotation_background_color: '', // 背景颜色
        clade_marker_shape: '', // 点形状
        clade_marker_size: '', // 点大小
        clade_marker_color: '', // 点颜色
        branchset: [
          {
            annotation: '', // 名称
            annotation_background_color: '', // 背景颜色
            clade_marker_shape: '', // 形状
            clade_marker_size: '', // 大小
            clade_marker_color: '', // 颜色
            branchset: []
          },
          {  }
        ]
      },
      ring: [ // 树图外围环 annot_3.txt
        { // 第一圈
          ring_width: 0.5,
          ring_height: 0.75,
          ring_internal_separator_thickness: 1,
          data: [ // 每圈的数据数组
            {
              name: 'xxx',
              value: 10
            }
          ]
        },
        { // 第二圈

        }
      ]
    };
    this.renderChart(res);
  }

  renderChart(res) {
    console.log(res);

    const width = 1000;
    const height = 900;
    const chartWrap = d3.select(this.refs['chart-wrap']);
    const svg = chartWrap.append('svg')
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('width', width)
      .style('height', height);

    const list = [];

    for (let i = 0; i < 5; i++) {
      list.push([]);
      for (let x = 0; x < 100; x++) {
        list[i].push({
          name: '样品' + (i+1),
          breadth:1,
          value: 1
        });
      }
      list[i].push({name:'样品组' + (i+1), breadth:5, value: 0})
    }

    renderRing(list);

    // 渲染树图外围的环
    function renderRing(list) {
      list.forEach((data, i) => {
        const thickness = 10;
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
      });
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
