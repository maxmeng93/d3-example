import React from 'react';
import { Link } from 'react-router-dom';

class Regist extends React.Component {
  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>注册</h1>
      </div>
    );
  }
}

export default Regist;
