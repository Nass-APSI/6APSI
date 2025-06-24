import React from 'react';
import './LandingPage.css';

function LandingPage({ setShowLogin }) {
  return (
    <div className="landing-background">
      <div className="landing-container">
        <h1>Welcome to 6APSI</h1>
        <button className="go-to-login-button" onClick={() => setShowLogin(true)}>
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
