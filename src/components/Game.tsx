import React from 'react';

import Timer, { TimerProps } from './Timer';

import Board, { BoardProps } from './Board';

type GameProps = TimerProps & BoardProps;

const Game = ({timeLeft, guess, stopGame, startGame, handleGuess}: GameProps) => {

  return (
    <>
      <Timer timeLeft={timeLeft} startGame={startGame} stopGame={stopGame} />
      <Board handleGuess={handleGuess} guess={guess} />
    </>
  )
}

export default Game;