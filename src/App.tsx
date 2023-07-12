import React, { MouseEventHandler } from 'react'
import './App.css'

import Game from "./components/Game";
import SettingsBar from "./components/SettingsBar";

function App() {

  const [timer, setTimer] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [slideValue, setSlideValue] = React.useState<number>(0);

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
  
  const handleSlideChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const parseIntSlideValue = parseInt(e.target.value);

    setSlideValue(parseIntSlideValue);

    let slideMinutes: number = Math.floor(parseIntSlideValue / 60);
    let slideSeconds: number = parseIntSlideValue % 60;

    console.log(slideMinutes);

    if(parseIntSlideValue >= 60){

      setMinutes(slideMinutes);
      setSeconds(slideSeconds);
    } else {
      setMinutes(0);
      setSeconds(slideSeconds);
    }
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
          seconds={seconds}
          minutes={minutes} 
          timer={timer}
          slideValue={slideValue}
          operators={operators}
          handleSlideChange={handleSlideChange}
          handleSetTimer={handleSetTimer} 
          handleSetSeconds={handleSetSeconds}
          handleSetMinutes={handleSetMinutes}
          handleLevelClick={handleLevelClick} 
          handleOperatorClick={handleOperatorClick}
        />
      </div> 
      <Game timeLeft={timeLeft} startTimer={startTimer} operators={operators} level={level} startGame={startGame} stopGame={stopGame} />
    </div>
    </>
  )
}

export default App
