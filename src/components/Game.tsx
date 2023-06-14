import React from 'react';

import Timer, { TimerProps } from './Timer';
import Board, { BoardProps } from './Board';

type GameProps = TimerProps & BoardProps;

const Game = ({timeLeft, operators, stopGame, startGame}: GameProps) => {


  return (
    <>
      <Timer timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
      <Board operators={operators} />
    </>
  )
}

export default Game;