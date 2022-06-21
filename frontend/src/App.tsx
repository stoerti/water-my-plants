import React from 'react';
import MoistureChart from './components/MoistureChart';
import './App.css';

declare global {
  interface Window {
    token:any;
  }
}

function App() {
  return (
      <MoistureChart />
  )
}

export default App;
