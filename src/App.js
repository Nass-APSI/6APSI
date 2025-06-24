import React, { useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      {showLogin ? <LoginPage /> : <LandingPage setShowLogin={setShowLogin} />}
    </div>
  );
}

export default App;
