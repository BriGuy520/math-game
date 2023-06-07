import React from 'react';

import Timer from './Timer';
import Button from './Button';

type GameProps = {
  timeLeft: number,
  startGame: React.MouseEventHandler<HTMLButtonElement>,
  stopGame: React.MouseEventHandler<HTMLButtonElement>,
}

const Game = ({timeLeft, stopGame, startGame}: GameProps) => {

  return (
    <>
      <Timer timer={timeLeft} />
      <Button btnClasses={"btn-outline-dark"} handleClick={startGame}>Start</Button>
      <Button btnClasses={"btn-outline-danger"} handleClick={stopGame}>Stop</Button>

    </>
  )
}

export default Game;