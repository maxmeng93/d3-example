import React from 'react';
import { Link } from 'react-router-dom';

class Line extends React.Component {
  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>地图</h1>
      </div>
    );
  }
}

export default Line;
