import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Login to 6APSI</h2>
        <input
          type="text"
          placeholder="Username"
        /><br />
        <input
          type="password"
          placeholder="Password"
        /><br />
        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
