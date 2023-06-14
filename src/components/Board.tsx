import React from 'react';

import Input from './Input';

export type BoardProps = {
  handleGuess: React.ChangeEventHandler<HTMLInputElement>,
  checkGuess: React.KeyboardEventHandler<HTMLInputElement>,
  guess?: string,
  operators: string[],
}

const Board = ({guess, operators, checkGuess, handleGuess}: BoardProps) => {


  return (
    <div className="board-container">
      <p>{Math.floor(Math.random() * 100)}</p>
      <Input handleChange={handleGuess} checkGuess={checkGuess} inputValue={guess} />
    </div>
  );

}

export default Board;