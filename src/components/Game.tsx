import React from 'react';

import Timer, { TimerProps } from './Timer';
import Board, { BoardProps } from './Board';

type GameProps = TimerProps & BoardProps;

const Game = ({timeLeft, operators, stopGame, startGame, startTimer}: GameProps) => {


  return (
    <>
      <Timer timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
      <Board timeLeft={timeLeft} startTimer={startTimer} operators={operators} />
    </>
  )
}

export default Game;