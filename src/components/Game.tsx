import React from 'react';

import Timer from './Timer';
import Button from './Button';

type GameProps = {
  timeLeft: number,
  startGame: React.MouseEventHandler<HTMLButtonElement>,
}

const Game = ({timeLeft, startGame}: GameProps) => {

  return (
    <>
      <Timer timer={timeLeft} />
      <Button btnClasses={"btn-outline-dark"} handleClick={startGame}>Start</Button>
    </>
  )
}

export default Game;