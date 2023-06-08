import React from 'react';

import Timer, { TimerProps } from './Timer';
import Board, { BoardProps } from './Board';

type GameProps = TimerProps & BoardProps;

const Game = ({timeLeft, guess, operators, stopGame, startGame, handleGuess}: GameProps) => {

  const [firstValue, setFirstValue] = React.useState(Math.floor(Math.floor(Math.random() * 100)));
  const [secondValue, setSecondValue] = React.useState(Math.floor(Math.floor(Math.random() * 100)));

  const selectedOperator: string = operators[Math.floor(Math.random() * operators.length)];
  let answer: number;

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

  return (
    <>
      <Timer timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
      <Board handleGuess={handleGuess} operators={operators} guess={guess} />
    </>
  )
}

export default Game;