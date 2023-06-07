import React, { MouseEventHandler } from 'react'
import './App.css'

import Game from "./components/Game";
import SettingsBar from "./components/SettingsBar";

function App() {

  const [timer, setTimer] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);

  const [level, setLevel] = React.useState<string>("Easy");
  const [operators, setOperators] = React.useState<Array<string>>([]);

  const [timeLeft, setTimeLeft] = React.useState<number>(0);
  

  const handleSetSeconds = (event: React.ChangeEvent<HTMLInputElement>) => {

      setSeconds(parseInt(event.target.value));
  }

  const handleSetMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {

    setMinutes(parseInt(event.target.value));
}

  const handleSetTimer = () => {
    
    const totalSeconds = (minutes * 60) + seconds;

    setTimer(totalSeconds);
    setTimeLeft(totalSeconds);
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

  const startGame = () => {

    setTimeLeft(timeLeft - 1);
  }

  React.useEffect(() => {
    const timerInterval = setInterval(() => {

      setTimeLeft((prevTime) => prevTime - 1);
      
    }, 1000);
    
    if(timeLeft === 0){
      return () => clearInterval(timerInterval);
    }
  }, []);

  return (
    <>
    <div className="container">
      <h1>Math Game</h1>
      <div className="settings-container">
        <SettingsBar 
            level={level} 
            timer={timer}
            operators={operators}
            handleSetTimer={handleSetTimer}
            handleSetSeconds={handleSetSeconds}
            handleSetMinutes={handleSetMinutes}
            handleLevelClick={handleLevelClick} 
            handleOperatorClick={handleOperatorClick}
          />
      </div>
      <div className="game-container">
        <Game timeLeft={timeLeft} startGame={startGame} />
      </div>
    </div>
    </>
  )
}

export default App
