import React, { MouseEventHandler } from 'react'
import './App.css'

import SettingsBar from "./components/SettingsBar";

function App() {

  const [timer, setTimer] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);

  const [level, setLevel] = React.useState<string>("Easy");
  const [operators, setOperators] = React.useState<Array<string>>([]);
  

  const handleSetSeconds = (event: React.ChangeEvent<HTMLInputElement>) => {

      setSeconds(parseInt(event.target.value));
  }

  const handleSetMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {

    setMinutes(parseInt(event.target.value));
}

  const handleSetTimer = () => {
    
    const totalSeconds = (minutes * 60) + seconds;

    setTimer(totalSeconds);
  }


  const handleLevelClick: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetElement = e.target as HTMLButtonElement;

    setLevel(targetElement.innerHTML);
  }

  const handleOperatorClick: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetElement = e.target as HTMLButtonElement;

    const operatorsSelected: Array<string> = [...operators];

    operatorsSelected.push(targetElement.innerHTML);

    const removeDuplicateOperators = [...new Set(operatorsSelected)];

    setOperators(removeDuplicateOperators);
  }

  console.log(operators);

  return (
    <>
     <h1>Math Game</h1>
     <SettingsBar 
        level={level} 
        timer={timer}
        handleSetTimer={handleSetTimer}
        handleSetSeconds={handleSetSeconds}
        handleSetMinutes={handleSetMinutes}
        handleLevelClick={handleLevelClick} 
        handleOperatorClick={handleOperatorClick}
      />
    </>
  )
}

export default App
