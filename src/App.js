import "./App.css";
import React from 'react';
import {useState, useEffect} from 'react';
import {StartScreen} from './components/StartScreen';

function App() {
  const [screen, setScreen] = useState('start');
  const [selectedDonut, setSelectedDonut] = useState(null); 
  const [showReadyScreen, setShowReadyScreen] = useState(false);

  const startClick = () => {
    setScreen('menu');
  };
  
  return (
    <div className="container">
     {screen === 'start' && <StartScreen startClick={startClick} />}
    </div>
  );
}

export default App;
