import React from 'react'
import './App.css'

import Timer from "./components/Timer";
import SettingsBar from "./components/SettingsBar";

function App() {

  const [timer, setTimer] = React.useState<number>(0);
  

  const handleTimerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTimer(parseInt(event.target.value));

  }


  return (
    <>
     <h1>Math Game</h1>
     <SettingsBar />
     <Timer handleTimerInput={handleTimerInput} timer={timer} />
    </>
  )
}

export default App
