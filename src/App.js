import "./App.css";
import React from 'react';
import {useState, useEffect} from 'react';
import {StartScreen} from './components/StartScreen';
import {MenuScreen} from './components/MenuScreen';
import {PaymentScreen} from './components/PaymentScreen';
import {PreparationScreen} from './components/PreparationScreen';
import {ReadyScreen} from './components/ReadyScreen';


function App() {
  const [screen, setScreen] = useState('start');
  const [selectedDonut, setSelectedDonut] = useState(null); 
  const [showReadyScreen, setShowReadyScreen] = useState(false);

  const handleClick = () => {
    setScreen('menu');
    console.log('clikc')
  };

  const onSelectDonut = (donut) => {
    setScreen('payment');
    setSelectedDonut(donut);
  };

  const payClick = () => {
    setScreen('preparation');
   
  };

  useEffect(() => {
    if (screen === 'preparation') {
      setTimeout(() => {
        setShowReadyScreen(true);
        setScreen('ready');
      }, 5000);
    }
  }, [screen]);

  const doneClick = () => {
    setScreen('start');
    setShowReadyScreen(false);
  }; 

  return (
    <div className="container">
     {screen === 'start' && <StartScreen handleClick={handleClick} />}
     {screen === 'menu' && <MenuScreen onSelectDonut={onSelectDonut}/> }
     {screen === 'payment' && <PaymentScreen payClick={payClick}/>}
     {screen === 'preparation' && <PreparationScreen donut={selectedDonut}/>}
     {showReadyScreen && <ReadyScreen donut={selectedDonut} doneClick={doneClick} />}
    </div>
  );
}

export default App;
