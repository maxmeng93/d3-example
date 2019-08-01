import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="content">
        <span><Link to="/">Home</Link></span>
        <h1>登录</h1>
      </div>
    );
  }
}

export default Login;
