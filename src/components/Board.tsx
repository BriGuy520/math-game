import React from 'react';

import Input from './Input';

export type BoardProps = {
  handleGuess: React.ChangeEventHandler<HTMLInputElement>,
  guess: string,
  operators: string[],
}

const Board = ({guess, operators, handleGuess}: BoardProps) => {

  const selectedOperator = operators[Math.floor(Math.random() * operators.length)];

  console.log(selectedOperator);

  

  return (
    <div className="board-container">
      <p>{Math.floor(Math.random() * 100)}</p>
      <Input handleChange={handleGuess} inputValue={guess} />
    </div>
  );

}

export default Board;