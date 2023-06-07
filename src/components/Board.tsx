import React from 'react';

import Input from './Input';

export type BoardProps = {
  handleGuess: React.ChangeEventHandler<HTMLInputElement>,
  guess: string,
}

const Board = ({guess, handleGuess}: BoardProps) => {

  return (
    <div className="board-container">
      <p>10 x 30 = </p>
      <Input handleChange={handleGuess} inputValue={guess} />
    </div>
  );

}

export default Board;