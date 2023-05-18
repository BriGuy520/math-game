import React, { MouseEventHandler } from 'react'
import './App.css'

import Timer from "./components/Timer";
import SettingsBar from "./components/SettingsBar";

function App() {

  const [timer, setTimer] = React.useState<number>(0);
  const [level, setLevel] = React.useState<string>("Easy");
  const [operators, setOperators] = React.useState<Array<string>>([]);
  

  const handleTimerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTimer(parseInt(event.target.value));

  }

  const handleLevelClick: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetElement = e.target as HTMLButtonElement;

    setLevel(targetElement.innerHTML);
  }

  const handleOperatorClick: MouseEventHandler<HTMLButtonElement> = () => {

  }


  return (
    <>
     <h1>Math Game</h1>
     <SettingsBar level={level} handleLevelClick={handleLevelClick} handleOperatorClick={handleOperatorClick} />
    </>
  )
}

export default App
