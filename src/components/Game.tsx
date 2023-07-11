import React from 'react';

import Input from './Input';
import Scores from './Scores';
import Timer from './Timer';

export type GameProps = {
  timeLeft: number,
  startTimer: boolean,
  operators: string[],
  level: string,
  startGame: React.MouseEventHandler<HTMLButtonElement>,
  stopGame: React.MouseEventHandler<HTMLButtonElement>
}

const Game = ({startTimer, operators, level, timeLeft, startGame, stopGame}: GameProps) => {

  const levelNum: number = level === "Easy" ? 20 : (level === "Medium" ? 40 : 60);


  const [firstValue, setFirstValue] = React.useState<number>(Math.floor(Math.floor(Math.random() * levelNum)));
  const [secondValue, setSecondValue] = React.useState<number>(Math.floor(Math.floor(Math.random() * levelNum)));
  const [operator, setOperator] = React.useState<string>(operators[Math.floor(Math.random() * operators.length)]);

  const [guess, setGuess] = React.useState<string>("");
  const [correct, setCorrect] = React.useState<number>();
  const [highScores, setHighScores] = React.useState<number[]>([]);
  
  if(operator == "Division" && secondValue == 0){
    setSecondValue(Math.floor(Math.floor(Math.random() * levelNum)));
  }

  const displayOperator: string = operator == "Addition" ? "+" : (operator == "Subtraction" ? "-" : (operator == "Multiplication" ? "x" : "/"));
  let answer: number;

   /* Game */

  const handleGuess = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setGuess(e.target.value);
  }

  const checkGuess = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if(e.key === 'Enter'){

      switch(operator){

        case 'Addition':
          answer = firstValue + secondValue;
          break;
        case 'Subtraction':
          answer = firstValue - secondValue;
          break;
        case 'Multiplication':
          answer = firstValue * secondValue;
          break;
        default:
          answer = firstValue / secondValue;  
          break;
      }
  
      if(parseFloat(guess) === parseFloat(answer.toFixed(2)) && timeLeft > 0){
        setCorrect(correct + 1);
      }

      setFirstValue(Math.floor(Math.floor(Math.random() * levelNum)));
      setSecondValue(Math.floor(Math.floor(Math.random() * levelNum)));
      setOperator(operators[Math.floor(Math.random() * operators.length)]);
      setGuess("");

    }
  }

  React.useEffect(() => {

    if(!startTimer){
      setCorrect(0);
    }

    if(timeLeft === 0){
      
      let newHighScores = [...highScores, correct];

      setHighScores(newHighScores);
    }

  }, [timeLeft, startTimer]);


  return (
    
    <div className="board-container">
      <div className="play-container">
        <Timer timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
        <div className="score-container">
          <p>Correct Answers: <b>{correct}</b></p>
        </div>
          {operators.length > 0 && startTimer ? 
              <div className="guess-container">
                  <h2>{firstValue} {displayOperator} {secondValue} = </h2>
                  <Input startTimer={startTimer} timeLeft={timeLeft} handleChange={handleGuess} checkGuess={checkGuess} inputValue={guess} /> 
              </div>
            :
            <div className="guess-container">
              <p>Please select your operators and start timer</p>
            </div>
          }
      </div>
      <div className="scores-container">
        <Scores highScores={highScores} />
      </div>
    </div>
  );

}

export default Game;