import React from 'react';

import Timer, { TimerProps } from './Timer';
import Board, { BoardProps } from './Board';

type GameProps = TimerProps & BoardProps;

const Game = ({timeLeft, operators, stopGame, startGame}: GameProps) => {

  const [firstValue, setFirstValue] = React.useState(Math.floor(Math.floor(Math.random() * 100)));
  const [secondValue, setSecondValue] = React.useState(Math.floor(Math.floor(Math.random() * 100)));

  const [guess, setGuess] = React.useState<string>("");

  console.log("First Value: " + firstValue + " Second Value: " + secondValue);

  const selectedOperator: string = operators[Math.floor(Math.random() * operators.length)];
  let answer: number;

    /* Game */

    const handleGuess = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
  
      setGuess(e.target.value);
    }

    const checkGuess = (e: React.KeyboardEvent<HTMLInputElement>) => {

      if(e.key === 'Enter'){

        switch(selectedOperator){
  
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
    
        console.log(answer);
      }

    }

  return (
    <>
      <Timer timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
      <Board handleGuess={handleGuess} checkGuess={checkGuess} operators={operators} guess={guess} />
    </>
  )
}

export default Game;