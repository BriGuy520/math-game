import React from 'react';

import Timer from './Timer';
import Button from './Button';

type GameProps = {
  timer: number
}

const Game = ({timer}: GameProps) => {

  const startGame = () => {
    console.log("Game started bitches!");
  }

  return (
    <>
      <Timer timer={timer} />
      <Button btnClasses={"btn-outline-dark"} handleClick={startGame}>Start</Button>
    </>
  )
}

export default Game;