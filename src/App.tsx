import React, { MouseEventHandler } from 'react'
import './App.css'

import Board from "./components/Board";
import SettingsBar from "./components/SettingsBar";

function App() {

  const [timer, setTimer] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);

  const [level, setLevel] = React.useState<string>("Easy");
  const [operators, setOperators] = React.useState<Array<string>>([]);

  const [startTimer, setStartTimer] = React.useState<boolean>(false);
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

    let operatorsSelected: Array<string> = [...operators];

    if(operatorsSelected.includes(targetElement.innerHTML)){

      operatorsSelected = operatorsSelected.filter(operator => operator !== targetElement.innerHTML);
    
    } else {

      operatorsSelected.push(targetElement.innerHTML);
    }

    setOperators(operatorsSelected);
  }

  const startGame = () => {

    if(operators.length > 0){

      setStartTimer(true);
    }

  }

  const stopGame = () => {
    
    setTimeLeft(timer);
    setStartTimer(false);
  }

  React.useEffect(() => {

    let timerInterval: number;

    if(startTimer){

      timerInterval = setInterval(() => {
  
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      
    }
    
    if(timeLeft === 0){
      return () => clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);

  }, [startTimer]);


  return (
    <>
    <div className="container">
      <h1 style={{'marginBottom': '48px'}}>Math Game</h1>
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
      <Board timeLeft={timeLeft} startTimer={startTimer} operators={operators} level={level} timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
    </div>
    </>
  )
}

export default App
