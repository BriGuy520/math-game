import React from 'react';

import Timer, { TimerProps } from './Timer';
import Board, { BoardProps } from './Board';


type GameProps = TimerProps & BoardProps;

const Game = ({timeLeft, operators, stopGame, startGame, startTimer, level}: GameProps) => {


  return (
    <>
      {/* <Timer  /> */}
    </>
  )
}

export default Game;