import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './assets/logo.svg';

export default function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    axios.get('/api/health').then(res => setHealth(res.data)).catch(() => setHealth({status: 'offline'}));
  }, []);

  return (
    <div style={{padding: 24, fontFamily: 'system-ui, sans-serif'}}>
      <img src={Logo} alt="HerHealthHub" width={100} />
      <h1>HerHealthHub</h1>
      <p>Backend status: {health ? health.status : 'loading...'}</p>
      <p>Example users and features go here. Expand with auth, routes and UI components.</p>
    </div>
  );
}
